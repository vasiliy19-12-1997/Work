import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import ListTodo from './components/ListTodo/ListTodo';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <AddTodo></AddTodo>
     <ListTodo></ListTodo>
    </div>
  );
}

export default App;
