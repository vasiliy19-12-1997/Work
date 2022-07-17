import React, { useState } from 'react';
import { Button } from '../components/button/button';
import { Input } from '../components/input/input';
import styles from './fetchToken.module.css';


type Props ={requestExchangeRateByToken: (tokenTitle:string) => void, } 

export function FetchToken(props: Props){
    const [inputValue, setInputValue] = useState<string>('');
    
    function cleaningInput() {
        setInputValue('')
    }

    function onClick() {
        props.requestExchangeRateByToken(inputValue);
        cleaningInput();
    }

    return (
        <div className={styles.fetchToken}>
            <Input onChange={setInputValue} valueInput={inputValue}/>
            <Button  title={"Add"} onClick={onClick}/>
        </div>
    )

}