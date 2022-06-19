import React, {useCallback, useState} from 'react';
import s from './InputPlus.module.scss';

interface InputPlusProps {
    onAdd: (title: string) =>void
}

export const InputPlus: React.FC<InputPlusProps>=({
    onAdd,
})=>{
    const [inputValue, setInputValue] = useState('');
    const addTask = useCallback(()=>{
        onAdd(inputValue)
        setInputValue('')
    },[inputValue])
    return (
        <div className={s.inputPlus}>
            <input
            value={inputValue}
            type="text" 
            className={s.inputPlusValue}
            placeholder='Add Task...'
            onChange={e=>setInputValue(e.target.value)}
            onKeyDown={e=>{
                if(e.key === 'Enter'){
                    addTask()
                }
            }}
            />
            <button
            onClick={addTask}
            className={s.inputPlusButton}
            />
            

            
        </div>
    );
};

export default InputPlus;