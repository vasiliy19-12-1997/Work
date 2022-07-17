import React, {FC, useState} from 'react';
export enum CardVariant {
    outlined  = 'outlined ',
    primary = 'primary',
}

interface CardText {
    width?:string,
    height?:string,
    variant: CardVariant,   
    children: React.ReactNode | React.ReactElement,
    onClick: (num: number) => void,
    
}



export const Card:FC<CardText>=({
    width,
    height,
    children,
    variant,
    onClick,
})=>{
    const [state, setState] = useState(0);
    return (
        <div style={{width, height, border: variant === CardVariant.outlined ? ' 1px solid red' : 'blue',
        background: variant === CardVariant.primary ? 'green' : 'white'
        }}
        onClick = {()=>onClick(state)}
        >
        {children}
        </div>
    );
       
      
};


