import React from 'react';
import s from './MyInput.module.css';
const MyInput = (props) => {
    return (
        <input className={s.myInput} {...props} />
            
       
    );
};

export default MyInput;