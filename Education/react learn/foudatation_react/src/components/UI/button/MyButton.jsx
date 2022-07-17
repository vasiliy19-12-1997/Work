import React from 'react';
import s from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
    return (
        // все пропсы которые мы будем передваать в май батн будет улетать в эту кнопку
        <button {...props}  className={s.myBtn}>
            {/* специальный пропс children для того что текст появился на странице */}
            {children}
        </button>
    );
};

export default MyButton;