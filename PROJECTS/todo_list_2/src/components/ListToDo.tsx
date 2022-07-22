
import todosStore from '../store/Store'

import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from 'mobx-react-lite'



function ListToDoItems() {
 
  return (
    <div>
        <h3>Todo</h3>
       
        {todosStore.tasks.map((t)=>(
        <Flex key={t.id}>
          <Checkbox
          onClick= {()=>t.done =! t.done}
          checked = {t.done}
          />
          <Input
          value={t.title}
          onChange={e=>t.title = e.target.value}
          />
          <Button
          onClick={()=>todosStore.deleteTodo(t.id)}
          />
        </Flex>
    ))}
      
    </div>
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