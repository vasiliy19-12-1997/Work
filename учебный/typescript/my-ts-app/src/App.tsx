import React from 'react';
import { Card, CardVariant } from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <Card width='200px' height='200px' variant={CardVariant.outlined}
      onClick={(num)=>console.log(`click`, 0)}
      >
      <button></button>
      </Card>
      
    </div>
  );
}

export default App;
