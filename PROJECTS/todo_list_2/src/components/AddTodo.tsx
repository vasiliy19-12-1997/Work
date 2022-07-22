
import todosStore from '../store/Store'

import { observer } from 'mobx-react-lite'
import { Button, Input, Grid } from "@chakra-ui/react";


function AddTodo() {
    
  return (
    <div>
        <label>
            <h3>{}</h3>
            <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input
            onKeyDown={e=>{
              if(e.key==='Enter'){
                todosStore.addTodo()
              }
            }}
            placeholder='Add todo' 
            type="text"
            value={todosStore.newTodo}
            onChange={(e)=>todosStore.newTodo=e.target.value}
            />
            </Grid>
            <Button
                onClick={()=>todosStore.addTodo()}
            >
                Todo
            </Button>

          
        </label>
      
    </div>
  )
}
export default observer(AddTodo)