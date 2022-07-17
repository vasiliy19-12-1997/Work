import React from 'react';
import s from './MyModale.module.css'
//пропс чилдрен для того чтобы реализовать все что хотим написать 
const MyModale = ({children, visile, setVisible}) => {
    const rootClasses =[s.myModale]
        if(visile){
            rootClasses.push(s.active)
        
    }
    return (
       <div className={rootClasses.join(' ')} onClick = {()=>setVisible(false)}>
           <div className={s.myModaleContent} onClick = {(e) => e.stopPropagation()}>
            {children}
           </div>

       </div>
    );
};

export default MyModale;