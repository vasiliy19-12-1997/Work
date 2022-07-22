
import todosStore from '../store/Store'

import { observer } from 'mobx-react-lite'
import { Button, Input, Grid } from "@chakra-ui/react";


function AddTodo() {
    
  return (
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
             <Button
                onClick={()=>todosStore.addTodo()}
            >
                Todo
            </Button>
            </Grid>
        )
}
export default observer(AddTodo)