import React from "react";
import s from './Modal.module.scss'
interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: ()=>void
};

export default function Modal({children, title, onClose}:ModalProps) {
  return( 
    <>
    
    <div className={s.Modal}
    onClick={onClose}
    >
        Modal
    </div>
    <div className={s.ModalDiv}>
        Modal
        <h1>{title}</h1>
        {children}
    </div>
   
    </>
  );
}

