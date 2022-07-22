import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';

import './App.css';
import AddTodo from './components/AddTodo';

import Bar from './components/Bar';
import TodoList from './components/ListToDo';



export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <Bar/>
        <TodoList/>
        <AddTodo/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
