import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import TodoList from "./components/TodoList"
import AddToDo from "./components/AddToDo"
import Bar from "./components/Bar"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box maxWidth='8x1' margin='auto' p={5}>
      <Bar/>
      <TodoList/>
      <AddToDo/>
    </Box>
  </ChakraProvider>
)
