import React, { useEffect, useState } from 'react';
import './App.css';
import { BoxCardToken } from './box-cards-token/boxCardToken';
import { FetchToken } from './fetch-token/fetchToken';
import { requestExchangeRateByToken } from './api';
import { GraphToken } from './graph-token/graphToken';

export type RateCard = { "exchangeRate": number[], "titleExchangeRate": string }
type CollectionCards = Array<RateCard >;

function App() {
  const [collectionCardsToken, setCollectionCardsToken] = useState<CollectionCards>([]);
  const [activeCard, setActiveCard] = useState<{ index: number, isActiv: boolean }>({ index: 0, isActiv: false });


  function createCardToken(token: string) {
    const titleExchangeRate = token.toLocaleUpperCase();
    requestExchangeRateByToken(titleExchangeRate)
      .then((json) => {
        if ('Response' in json && json.Response) {
          alert("нет такого токена")
        }
        if('USD' in json) {
          const exchangeRate = [];
          exchangeRate.push(json.USD);
          const rates = [...collectionCardsToken, { exchangeRate, titleExchangeRate }];
          setCollectionCardsToken(rates);
        }
      });

  }

  useEffect(() => {
    const timer = setInterval(() => {
      collectionCardsToken.forEach((elem) => {
        requestExchangeRateByToken(elem.titleExchangeRate)
          .then(result => setCollectionCardsToken(old => {
            if('USD' in result) {
            const newState = old.map((val) => val.titleExchangeRate === elem.titleExchangeRate ? { titleExchangeRate: val.titleExchangeRate, exchangeRate: [...val.exchangeRate, result.USD] } : val)
            return newState
            }
            return old;
          }))
      })
    }, 10000)

    return function () {
      clearInterval(timer);
    }

  }, [collectionCardsToken])


  function recordIndexAndOpenGraphActiveCard(index: number) {
    setActiveCard(old => {
      const newState = { ...old };
      newState.isActiv = true;
      newState.index = index;
      return newState
    });
  }

  function closeActiveCardGraph() {
    setActiveCard(old => {
      const newState = { ...old };
      newState.isActiv = false;
      newState.index = 0;
      return newState
    })
  }


  return (
    <div className="App">
      <FetchToken requestExchangeRateByToken={createCardToken} />

      <BoxCardToken collectionCardsToken={collectionCardsToken} onClick={recordIndexAndOpenGraphActiveCard} />

      {activeCard.isActiv ?
        <GraphToken closeActiveCardGraph={closeActiveCardGraph} activeToken={collectionCardsToken[activeCard.index]} />
        : null}

    </div>
  );
}

export default App;
