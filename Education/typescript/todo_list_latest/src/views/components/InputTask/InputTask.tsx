import React, {useCallback, useState, useRef, useEffect} from 'react';
import s from './InputTask.module.scss'
interface TaskToDo {
  id:string,
  title:string,
  onDone:(id:string)=>void,
  onEdited:(title:string, id:string)=>void,
  onRemove:(id:string)=>void,
}
export const InputTask:React.FC<TaskToDo>=({
  id,
  title,
  onDone,
  onEdited,
  onRemove,
})=>{
  const [state, setState] = useState('');
  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState(false);
  const ref = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    if(edit)
    ref?.current?.focus()
  }, [edit])

  

  return(
    <div 
    className={s.inputTask}>
       <label className={s.inputTaskLabel}>  
          <input
            className={s.inputTaskCheckbox} 
            checked={checked}
            onChange={s=>{setChecked(s.target.checked)
              if(s.target.checked){
                setTimeout(()=>{
                  onDone(id)
                }, 300)
              }
            }}
            type="checkbox"
          />
        {edit ?(
          <input
            className={s.inputTaskInput}
            ref={ref}
            value={state}
            onChange={s=>setState(s.target.value)}
            type="text" />
          ):(
        <h3 className={s.inputTaskTitle}>{title}</h3>
        )}
      </label>
        {edit ?(
          <button
            arial-label='Save'
            className={s.inputTaskSave}
            onClick={()=>{
              if(state){
                onEdited(state, id)
              }if(!state){
                onRemove(id)
                
              }
              setEdit(false)
            }}
          />
          ):(
          
          <button
            arial-label='Edit'
            className={s.inputTaskEdit}
            onClick={(state)=>{
              if(state){
                setEdit(true)
              }
              
              
              
            }}
          />
          )}
          <button
            arial-label='Delete'
            className={s.inputTaskDelete}
            onClick={()=>{
              setTimeout(()=>{
                onRemove(id)
              }, 300)
            }}
          />
         

    </div>
  )
};
export default InputTask;