
import React from 'react';
import { CardToken } from '../components/card-token/cardToken';
import styles from './boxCardToken.module.css';
import { RateCard } from '../App';

type Props = { collectionCardsToken: RateCard[], onClick: (index: number) => void}

export function BoxCardToken(props: Props) {

    return(
        <div className={styles.boxCardToken}>
            {props.collectionCardsToken.map( (dateCard, index) => <CardToken  index={index} key={index} title={dateCard.titleExchangeRate} exchangeRate={dateCard.exchangeRate[dateCard.exchangeRate.length-1]} onClick={props.onClick}/>)}
            
        </div>
    )
}