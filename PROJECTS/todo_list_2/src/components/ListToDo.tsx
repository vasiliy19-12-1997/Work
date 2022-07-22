
import todosStore from '../store/Store'

import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from 'mobx-react-lite'



function ListToDoItems() {
 
  return (
        <>
         {todosStore.tasks.map((t)=>(
        <Flex pt={2} key={t.id}>
          <Checkbox
          onClick= {()=>t.done =! t.done}
          checked = {t.done}
          />
          <Input
          value={t.text}
          onChange={e=>t.text = e.target.value}
          />
          <Button
          onClick={()=>todosStore.deleteTodo(t.id)}
          >
          Delete
          </Button>
        
        </Flex>
    ))}
     </>
  
  )
}
const ObservedTodoListItems = observer(ListToDoItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <ObservedTodoListItems />
    </>
  );
}
export default (TodoList)