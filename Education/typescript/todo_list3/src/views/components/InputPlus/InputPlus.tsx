import React, { useCallback, useState } from "react";
import  create  from 'zustand';

import s from './InputPlus.module.scss';
interface InputPlusProps {
    onAdd:(title:string)=>void
}
export const InputPlus:React.FC<InputPlusProps>=({
    onAdd,
})=>{
    const [value, setValue] = useState('');
    const addTask = useCallback(()=>{
        onAdd(value)
    }, [value])
    return( 
        <div className={s.InputPlus}>
            <input
            className={s.InputPlusInput}
            value={value}
            onChange={e=>setValue(e.target.value)}
            type="text" 
            placeholder="Напиши уже что-то..."
            />
            <button
            className={s.InputPlusButton}
            onClick={addTask}
            />
        </div>
    )
}