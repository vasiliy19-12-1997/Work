import React, {useId} from "react";

export interface IAppProps {
  id:string
}

export const  helper2:React.FC<IAppProps>=({
  id,
})=>{
    id = useId()
  return (
    <div>
      {id}
    </div>
  )
}
