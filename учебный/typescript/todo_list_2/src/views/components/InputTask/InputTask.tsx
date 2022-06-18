import React, {useCallback, useRef, useState, useEffect} from 'react';
import s from './InputTask.module.scss';

interface InputTaskProps {
    id: string,
    title: string,
    onDone:(id: string)=>void,
    onEdited:(id: string, title: string)=>void,
    onRemoved:(id:string)=>void,
}
export const InputTask: React.FC<InputTaskProps>=({
    id,
    title,
    onDone,
    onEdited,
    onRemoved,
})=>{
    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [value, setValue]= useState(title)
    const editTitleInputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if(isEditMode){
            editTitleInputRef?.current?.focus();
        }
    },[isEditMode])
    console.log(title)
    return (
        <div className={s.inputTask}>
          <label className={s.inputTaskLabel}>
            <input 
            type="checkbox"
            disabled={isEditMode}
            checked={checked}
            onChange={e=>{
                setChecked(e.target.checked)
                
            }}
            className={s.inputTaskCheckBox}
            />
            {isEditMode ?(
            <input 
                ref={editTitleInputRef}
                type="text"
                value={value}
                onChange={e=>setValue(e.target.value)} 
                className={s.inputTaskText}
                onKeyDown={e=>{
                    if(e.key==='Enter'){
                        onEdited(id, value)
                        setIsEditMode(false)
                }
                }}
            />
            )
            :
            (
                <h3 className={s.inputTaskTitle}>{title}</h3>

            )
        }
        {isEditMode?(
             <button
                className={s.inputTaskButton}
                aria-label='Save'
                onClick={()=>{
                    onEdited(id, title)
                    setIsEditMode(false)
                }}
             />
        )
         :
         (
            <button
                className={s.inputTaskButton}
                aria-label='Edit'
                onClick={()=>{
                    setIsEditMode(true)
                }}
            />
         )   
        }
        <button
            className={s.inputTaskButton}
            aria-label='Remove'
            onClick={()=>{
                if(confirm('Are you sure?/Вы уверены?')){
                    onRemoved(id)
                }
            }}
        />
        </label>
        </div>
    );
};
export default InputTask;