import React from 'react';
import styles from './graphColumn.module.css';

type Props = {nodeExchangeRate: number, heigth: number, index: number}
export function GraphColumn(props:Props) {
    const height =`${props.heigth * 100 + 100}px`;
    return (
        <div  className={styles.graphColumn}>
            <div className={styles.column} style={{height: height}}></div>
            <span>{props.nodeExchangeRate}</span>
        </div>
    )
}