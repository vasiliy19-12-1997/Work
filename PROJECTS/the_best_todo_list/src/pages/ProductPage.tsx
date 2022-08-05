import * as React from 'react';
import AddTodo from '../components/addtodo/AddTodo';
import { CreateProduct } from '../components/createProduct/CreateProduct';
import ErrorMessage from '../components/error/ErrorMessage';
import Loader from '../components/loader/Loader';
import Modal from '../components/modal/Modal';
import { ToTask } from '../components/task/ToTask';
import { ModalContext } from '../context/ModalContext';
import { UseTasks } from '../customHooks/UseTasks';
import { ITask } from '../Models';

export interface IAppProps {
}

export function ProductPage (props: IAppProps) {
    const {loading, error, tasks, addTask} = UseTasks()
    const {modal, open, close} = React.useContext(ModalContext)
  function createHandler(product: ITask) {
    close()
    addTask(product)
  }
    return (
      <div className="App">
        
       <AddTodo/>
        
        {loading &&<Loader/>}
        {tasks.map(p=><ToTask task={p} key={p.id} />)}
        {error && <ErrorMessage error={error}/>}
        {modal && <Modal title='Create new task'
        onClose={()=>close()}
        >
          <CreateProduct onCreate={createHandler}/>
        </Modal>}
        <button
        onClick= {()=>open()}
        >modal</button>
      </div>
    );
}
