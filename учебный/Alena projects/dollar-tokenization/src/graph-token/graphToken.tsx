import React, { useState } from 'react';
import { RateCard } from '../App';
import { GraphColumn } from '../components/graph-column/graphColumn';
import { Icon } from '../components/icon/icon';
import styles from './graphToken.module.css';


type Props = { closeActiveCardGraph: () => void, activeToken: RateCard }

export function GraphToken(props: Props) {

    const tenCurrentValues = [...props.activeToken.exchangeRate].slice(- 11);
    const maxCourse = Math.max(...tenCurrentValues);
    const minCourse = Math.min(...tenCurrentValues);

    function calculationHeigt(nodeExchangeRate:number) {
        let currenCourseCoefficientHeight = Number(((nodeExchangeRate - minCourse) / (maxCourse - minCourse)).toFixed(2));
        if ( isNaN(currenCourseCoefficientHeight) ) {
            currenCourseCoefficientHeight = 1;
        }
        return currenCourseCoefficientHeight;
    }


    return (
        <div className={styles.graphToken}>
            <div className={styles.header}>
                <div className={styles.currentCours}>
                    <h1>{props.activeToken.titleExchangeRate}</h1>
                    <div className={styles.cours}>{props.activeToken.exchangeRate[props.activeToken.exchangeRate.length - 1]}</div>
                </div>
                <Icon name={'close'} width={34} height={34} onClick={props.closeActiveCardGraph} />
            </div>

            <div className={styles.graph}>
                {tenCurrentValues.map((nodeExchangeRate, index) => {
                    const  currenCourseCoefficientHeight = calculationHeigt(nodeExchangeRate);
                    return <GraphColumn nodeExchangeRate={nodeExchangeRate} heigth={currenCourseCoefficientHeight} index={index} />
                })}
            </div>
        </div>
    )
}