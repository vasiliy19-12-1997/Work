import React, { useCallback, useRef, useState, useEffect } from "react";
import  create  from 'zustand';

import s from './InputTask.module.scss';
import { InputPlus } from './../InputPlus/InputPlus';
interface InputTaskProps {
    id:string,
    title:string,
    onDone:(id:string)=>void,
    onUpdate:(title:string, id:string)=>void,
    onRemove:(id:string)=>void,
    
}
export const InputTask:React.FC<InputTaskProps>=({
    id,
    title,
    onDone,
    onUpdate,
    onRemove,

})=>{
    const [value, setValue] = useState(title);
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const locale = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(edit){
            locale?.current?.focus();
        }
        
    },[edit]);
    return( 
        <div className={s.InputTask}>
            <label className={s.InputTaskLabel}>
                <input type="checkbox"
                className={s.InputTaskCheckbox}
                checked={checked}
                onChange={r=>{setChecked(r.target.checked)
                if(r.target.checked){
                    setTimeout(()=>{
                        onDone(id)
                    }, 300)
                }
                }}
                />
                {edit ? (
                     <input
                     className={s.InputTaskText} 
                     type="text"
                     ref={locale}
                     value={value}
                     onChange={r=>setValue(r.target.value)}
                     onKeyDown={(r)=>{
                         if(r.key === 'Enter'){
                             onUpdate(value, id)
                             setEdit(false)
                         }
                     }} 
                     />
                ):(
                    <h3 className={s.InputTaskTitle}>{title}</h3>
                )}
               
            </label>
            {edit ?(
                 <button
                 aria-label="Save"
                 className={s.InputTaskSave}
                 onClick={()=>{
                     onUpdate(value, id)
                     setEdit(false)
                 }}
                 />
            ):(
                <button
                aria-label="Edit"
                className={s.InputTaskEdit}
                onClick={()=>{
                    setEdit(true)
                }}
                />
            )}
            <button
            aria-label="Remove"
            className={s.InputTaskRemove}
            onClick={()=>{
                onRemove(id)
            }}
            />
            
            
        </div>
    )
}