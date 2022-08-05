import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { ITask } from '../../Models';
import ErrorMessage from '../error/ErrorMessage';
import s from './CreateProduct.module.scss'
export interface IAppProps {

}
interface CreateProductProps {
    onCreate:(product: ITask)=>void
}
const productData:ITask= {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 10,
            count: 10,
        }
}

export function CreateProduct ({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    async function submitHandler(event:React.FormEvent){
        event.preventDefault()
        setError('')
        if(value.trim().length === 0){
            setError('Pizdec')
        }
        productData.title = value;
        const response = await axios.post<ITask>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }
    function changeHandler (event:React.KeyboardEvent<HTMLInputElement>){
        setValue(event.target.value)
    }
  return (
    <form 
    onSubmit={submitHandler}
    className={s.CreateProduct}>
      <input 
      type="text"
      className={s.CreateProductInput}
      placeholder='Create task...'
      value={value}
      onChange={changeHandler}
       />
       {error && <ErrorMessage error={error}/>}
       <button
       className={s.CreateProductButton}
       type='submit'
       >Create task</button>
    </form>
  );
}
