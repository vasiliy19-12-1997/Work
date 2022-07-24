import { Button, Checkbox, Flex, Heading, Input } from '@chakra-ui/react'
import { observer } from "mobx-react";
import React from 'react'
import todosStore from '../store/Store'


function TodoListItems() {
  return (
    <>
    {todosStore.tasks.map((t)=>(
      <Flex pt={2} key = {t.id}>
        <Checkbox
          onClick={()=>(t.done = !t.done)}
          checked={t.done}
        />
        <Input
          value = {t.text}
          onChange = {(e)=>(t.text = e.target.value)}
        />
        <Button
          onClick = {()=>todosStore.removeTodo(t.id)}
        >
          Delete
        </Button>
      </Flex>
  ))}
    </>
  )
}
const ObservableTodoListItems = observer(TodoListItems);
function TodoList(){
    return(
      <>
        <Heading>ToDo</Heading>
        <ObservableTodoListItems/>
      </>
    )
}
export default TodoList;