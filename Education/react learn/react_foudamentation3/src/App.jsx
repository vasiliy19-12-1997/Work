
import { useState } from 'react';
import './App'
import Counter from './components/Counter';


function App() {
  

  return (
    <div className="App">
     <div className='post'>
      <Counter/>
      <div className='post__content'>
        <strong>JS</strong>
        <div>
          JavaScript - язык программирования
        </div>
      </div>
      <div className='post__btns'>
        <button>Delete</button>
      </div>
     </div>
    </div>
  );
}

export default App;
