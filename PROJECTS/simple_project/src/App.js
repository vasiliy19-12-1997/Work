import "./App.css";
import { TodoListView } from "./components/TodolistView";
import { store } from "./store/TodoList";
function App() {
  // const gor = `hello, ${first.length > 0 ? `${firstname[0]}.` : '' } ${last.name}`
  return (
    <div className="App">
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
