import React from "react";
import styles from './currentExchangeRate.module.css';

type Props = { exchangeRate: number,}

export function CurrentExchangeRate(props: Props) {
    return <div className={styles.currentExchangeRate}>{props.exchangeRate}</div>
}