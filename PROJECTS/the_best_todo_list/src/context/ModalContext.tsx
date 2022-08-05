import { createContext, useState } from 'react';
interface ImodalContext {
    modal:boolean,
    open:()=>void,
    close:()=>void,

}
export const ModalContext =createContext<ImodalContext>({
    modal: false,
    open:()=>{},
    close:()=>{},
})

export const ModalState = ({children}: {children: React.ReactNode})=>{
    const [modal, setModal] = useState(false)
    function open(){
        setModal(true)
    }
    function close(){
        setModal(false)
    }
    
    return (
    <ModalContext.Provider value={{modal, open, close}}>
        {children}
    </ModalContext.Provider>
    );
}