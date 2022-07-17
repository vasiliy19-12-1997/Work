import React, {useId} from "react";

export interface generateProps {
    id:string
}

export const generateId: React.FC<generateProps>=({
    id
}) =>{
   id=useId()
    return (
        <div>
            {id}
        </div>
    )
};