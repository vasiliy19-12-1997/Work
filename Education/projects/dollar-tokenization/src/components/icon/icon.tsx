import { type } from "os";
import React from "react";
import styles from './icon.module.css';

import  close from '../icon/iconCollection/close_white_24dp.png';


type Props = {name: 'close' | 'plus', width: number,  height: number, onClick: () => void}

export function Icon(props:Props) {
    const  height = `${props.height}px`;
    const  width = `${props.width}px`;
    let activeIcon: string  = '';

    if(props.name === "close"){
        activeIcon = close;
    } else {
        activeIcon = ''
    }

    return (
        <div className={styles.closureIcon} onClick={props.onClick}>
                <img src={activeIcon} style={{width: width,  height: height}}/>
            </div>
    )
}