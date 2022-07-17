import React, {FC} from 'react';


export interface IAdress {
    street:string,
    city:string,
    zipcode: string,
}

export interface IUser {
    id:number,
    name: string,
    email: string,
    address: IAdress,
    
}
export const UserItem: FC<IUser>=({
 id,
 name,
 address


})=>{
    return (
        <div  style={{padding: 15, border: '1px solid blue'}}>
            {id}, {name}
        

        
    </div>
    );
};
ts