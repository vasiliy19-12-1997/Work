import React, {useCallback, useEffect, useState, useRef, useId} from "react";
import s from './index.module.scss';
import create from "zustand/react";
 

interface InputTaskProps {
    id: string,
    title: string,
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}
export const InputTask: React.FC<InputTaskProps>=({
    id,
    title,
    onDone,
    onEdited,
    onRemoved,
}) =>{
    console.log(id)
   const [checked, setChecked] = useState(false);
   const [isEditMode, setIsEditMode] = useState(false);
   const [state, setValue] = useState(title);
   const editTitleInputRef = useRef<HTMLInputElement>(null);
   
   useEffect(()=>{
    if(isEditMode){
        editTitleInputRef?.current?.focus();
    }
   }, [isEditMode])
  

    return (
        <div className={s.inputTask}>
           <label className={s.inputTaskLabel}>
            <input type="checkbox" 
            disabled={isEditMode}
            checked={checked}
            className={s.inputTaskCheckBox}
            onChange={e=>{
                setChecked(e.target.checked)
                if(e.target.checked){
                    setTimeout(()=>{
                        onDone(id);
                    }, 300)
                    
                }
            }}
            />
            {isEditMode ?(
                <input 
                value={state}
                ref={editTitleInputRef}
                onChange ={e=>{
                    setValue(e.target.value)
                }}
                className={s.inputTaskEditTitle}
                onKeyDown={e=>{
                    if(e.key === 'Enter'){
                        onEdited(id, state);
                        setIsEditMode(false);
                    }
                }}
                
                
                />
            ): (
                <h3 className={s.inputTaskTitle}>{title}</h3>
            )
            }
            
           </label>
           {isEditMode? 
           (
            <button
           aria-label="Save"
           className={s.inputTaskSave}
           onClick={()=>{
                onEdited(id, state)
                setIsEditMode(false);
           }}
           ></button>
           )
           :
           (
            <button
            aria-label="Edit"
            className={s.inputTaskEdit}
            onClick={()=>{
                 setIsEditMode(true);
                 console.log(state)
            }}
            ></button>
           )
        }
          
           <button
              aria-label="Remove"
              className={s.inputTaskRemove}
              onClick={()=>{
               if(confirm('Are you sure?')){
                onRemoved(id)
               }
              }}
           >

           </button>
        </div>
    )
};