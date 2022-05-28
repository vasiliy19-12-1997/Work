import logo from './logo.svg';
import './App.scss';
const date1 = new Date(2022, 05, 25, 6, 38);
const date2 = new Date(2022, 05, 25, 6, 39);
const initialData = [//.....1
{title: 'Изучить React',
desc: 'Да поскорее',

}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
