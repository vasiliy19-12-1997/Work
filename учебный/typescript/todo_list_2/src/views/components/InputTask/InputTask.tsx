import React, {useState, useCallback, useRef, useEffect} from "react";
import s from './InputTask.module.scss';
interface InputTaskProps {
    id:string,
    title:string,
    onDone:(id:string)=>void,
    onUpdate:(id:string, title:string)=>void,
    onRemove:(id:string)=>void

}
export const InputTask:React.FC<InputTaskProps>=({
    id,
    title,
    onDone,
    onUpdate,
    onRemove
})=>{
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [isEditMode, setIsEditMode]=useState(false);
    const editTitleInputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(isEditMode){
            editTitleInputRef?.current?.focus()
        }
    })
    console.log(onUpdate)

    
    return (
        <div className={s.inputTask}>
            <label>
            <input
                className={s.inputTaskInput}
                type="checkbox"
                disabled={isEditMode}
                checked={checked}
                onChange={e=>{
                    setChecked(e.target.checked)
                    if(e.target.checked){
                        setTimeout(()=>{
                            onDone(id)
                        },300)
                    }
                }}
            />
            {isEditMode?(
            <input
                ref={editTitleInputRef}
                value={value}
                onChange={e=>setValue(e.target.value)}
                className={s.inputTaskInput}
                onKeyDown={e=>{
                    if(e.key === 'Enter'){
                        onUpdate(id, value)
                        setIsEditMode(false)
                    }
                }}
                
                type="text" />
                ):(
                <h3 className={s.InputTaskTitle}>{title}</h3>
                )
            }
        </label>
        {isEditMode ?(
            <button
                className={s.inputTaskSave}
                aria-label='Save'
                onClick={()=>{
                    onUpdate(value, id)
                    setIsEditMode(false)
                }}
        
            />
        ):(
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
                className={s.inputTaskDelete}
                aria-label='Delete'
                onClick={()=>{
                    if(confirm('Точно надо удалить?'))
                    onRemove(id)
                }}
            />
          
        </div>
    )

}
   

export default InputTask;
