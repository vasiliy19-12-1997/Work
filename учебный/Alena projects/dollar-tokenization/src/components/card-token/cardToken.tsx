import { type } from 'os';
import React from 'react';
import { CurrentExchangeRate } from '../current-exchange-rate/currentExchangeRate';
import styles from './cardToken.module.css';

type Props = {title: string, exchangeRate: number, onClick: (index: number) => void, index: number }

export function CardToken(props: Props) {

    return (
        <div className={styles.cardToken} onClick={() => props.onClick(props.index)}>
            
                <h1>{props.title}</h1>
           
            <CurrentExchangeRate  exchangeRate={props.exchangeRate} />
        </div>
    )
}