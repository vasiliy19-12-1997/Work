import React, {useCallback, useState} from 'react';
import s from './InputPlus.module.scss'
interface InputPlusProps {
  useToDo:(title:string)=>void
}
export const InputPlus:React.FC<InputPlusProps>=({
  useToDo
})=>{
  const [state, setState] = useState('');
  const addTask = useCallback(()=>{
    useToDo(state)
  },[state])
  return(
    <div className={s.InputPlus}>
        <input 
        className={s.InputPlusInput}
        type="text"
        value={state}
        onChange={r=>setState(r.target.value)}
        maxLength={30}
        placeholder='Please write something...'
        />
        <button
        className={s.InputPlusButton}
        onClick={addTask}

        />

    </div>
  )
};

export default InputPlus;