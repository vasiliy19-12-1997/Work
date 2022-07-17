import logo from './logo.svg';
import './App.css';

function App(props) {
  function createStyles(props){
    return (
    <div className={`YourColor ${props.color}`}>
      {props.children}
    </div>
    );
  }
  function Dialog(props){
    return (
      <createStyles color='blue'>
        <h1 className='Dialog-title'>
      {props.title}
        </h1>
        <h1 className='Dialog-message'>
          {props.message}
        </h1>
    </createStyles>    
    )
  }
  function WelcomeDialog(){
    return(
      <Dialog 
      title= 'fdfdf'
      message = 'fdfdf'
      >
        
      </Dialog>
    )
  }
  
  return (
    <div className="App">
     
    </div>
  );
}
export default App;
