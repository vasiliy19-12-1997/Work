import { Button, Grid, Input } from '@chakra-ui/react'
import React from 'react'
import todosStore from '../store/Store'
import { observer } from "mobx-react";


function AddToDo() {
  return (
    <Grid pt= {3} templateColumns='5fr 1fr' columnGap='3'>
      <Input
      value={todosStore.newTodo}
      onChange={(e)=>(todosStore.newTodo=e.target.value)}
      placeholder='add task...'
      onKeyDown={e=>{
          if(e.key === 'Enter'){
            setTimeout(()=>{
              todosStore.addTodo()
            }, 300)
          }
          }}
      />
      <Button
        onClick={
          ()=>todosStore.addTodo()}
      >Save</Button>
    </Grid>
  )
}
export default observer(AddToDo);