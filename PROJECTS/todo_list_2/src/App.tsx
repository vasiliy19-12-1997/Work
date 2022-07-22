import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';

import './App.css';
import AddTodo from './components/AddTodo';

import TodoList from './components/ListToDo';



export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <TodoList/>
        <AddTodo/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
