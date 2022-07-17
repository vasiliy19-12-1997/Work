import React, {useEffect, useState} from 'react';
import { Card, CardVariant } from './components/Card/Card';
import { UsetList } from './components/UserList/UsetList';
import { IUser } from './components/types/types';
import axios from 'axios';
function App() {
 const [users, setUsers]= useState<IUser[]>([])
 useEffect(()=>{
  fetchUsers()
 },[])

 async function fetchUsers(){
  try{
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  }catch(e){
    alert(e)
  }
 }
  return (
    <div className="App">
      <Card width='200px' height='200px' variant={CardVariant.outlined}
      onClick={(num)=>console.log(`click`, 0)}
      >
      <button></button>
      </Card>
      <UsetList users={users}/>
      
    </div>
  );
}

export default App;
