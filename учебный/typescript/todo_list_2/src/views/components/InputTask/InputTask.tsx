import React, {useCallback, useRef, useState, useEffect} from 'react';
import s from './InputTask.module.scss';

interface InputTaskProps {
   id: string,
   title:string,
   onDone:(id:string)=>void,
   onEdited:(id: string, title: string)=>void,
   onRemove:(id:string)=>void,

}
export const InputTask: React.FC<InputTaskProps>=({
    id,
    title,
    onDone,
    onEdited,
    onRemove,
})=>{
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const editTitleInputRef = useRef <HTMLInputElement>(null)
    useEffect(()=>{
        if(isEditMode){
            editTitleInputRef?.current?.focus()
        }
    },[isEditMode])

   
    return (
        <div className={s.inputTask}>
            <label className={s.inputTaskLabel}>
                <input type="checkbox" 
                checked={checked}
                onChange={e=>{
                    setChecked(e.target.checked)
                    if(e.target.checked){
                        setTimeout(()=>{
                            onDone(id)
                        }, 300)
                    }
                }}
                />
               
                {isEditMode ?(
                     <input 
                     ref={editTitleInputRef}
                     type="text"
                     value={value}
                     onChange={e=>setValue(e.target.value)}
                     onKeyDown={e=>{
                        if(e.key === 'Enter'){
                            onEdited(id, value);
                            setIsEditMode(false);
                        }
                    }}
                     />
                ):
                (
                    <h3 className={s.inputTaskTitle}>{title}</h3>
                )
                
            }
            </label>
            
            {isEditMode ?(
                   <button
                   className={s.inputTaskSave}
               aria-label='Save'
               onClick={()=>{
                   onEdited(id, value)
                   setIsEditMode(false)
               }}
               onKeyDown={e=>{
                if(e.key==='Enter'){
                    onEdited(id, value)
                }
               }}
               /> 
            )
            :
            (
                <button
                className={s.inputTaskEdit}
                aria-label='Edit'
                onClick={()=>{
                  setIsEditMode(true)
                }}
                 />
            )
        }
                <button
                    aria-label='Delete'
                    className={s.inputTaskRemove}
                    onClick={()=>{
                        if(confirm('Вы уверены?/Are you sure?'))
                        onRemove(id)
                    }}
                 />
               
               
            
            
            
            
        </div>
    );
};
export default InputTask;