import { Box, ChakraProvider, ColorModeProvider, theme } from '@chakra-ui/react';
import React from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

import TodoList from './components/ListToDo';



export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <ColorModeSwitcher/>
        <TodoList/>
        <AddTodo/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
