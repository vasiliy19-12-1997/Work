import { type } from 'os';
import React, { useState } from 'react';
import styles from './input.module.css'

type Props = {onChange: (valueInput:string)=> void, valueInput: string  }

export function Input(props: Props){
    

    return <input type="text" className={styles.input} placeholder="Введите токен" value={props.valueInput} onChange={(event) => props.onChange(event.target.value)}/>

}