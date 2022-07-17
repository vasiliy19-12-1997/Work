import React, {useCallback, useEffect, useState} from "react";
import s from './index.module.scss';
import create from "zustand/react";

interface InputPlusProps {
    onAdd: (title:string) => void;
}

export const InputPlus: React.FC<InputPlusProps>=({
    onAdd,
}) =>{
    const [inputValue, setInputValue] = useState('')
    const addTask = useCallback(()=> {
        onAdd(inputValue);
        setInputValue('');
    }, [inputValue])
    
    return (
        <div className={s.inputPlus}>
            <input type="text"
            className={s.inputPlusValue}
            value = {inputValue}
            onChange = {e=>setInputValue(e.target.value)}
            onKeyDown={(e)=> {
                if(e.key === 'Enter') {
                    addTask();
                }
            }}
            placeholder='type text here...'
            />
            <button
            onClick={addTask}
            arial-label='Add'
            className={s.inputPlusButton}
            />
                
            
        </div>
    )
};