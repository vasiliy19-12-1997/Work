import React,{ useState } from "react";
import {v1 as uuid} from 'uuid';
import {v3} from 'uuid';
import s from './AddTodo.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {Row, Col, Button, FormControl} from 'react-bootstrap';
function AddTodo({todo, setTodo, title}){
    const [value, setValue] = useState('');
    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuid(v3),
                status: true, 
                title: value,
            }]
        );
        setValue('');
    }
    return(
        
        <Row className={s.root}>
            <Col>
                <input className="" value={value} onChange ={(e)=>setValue(e.target.value)}/>
                <Button className={s.btn} onClick={()=>saveTodo()}>Save</Button>
            </Col>
        </Row>
    )
}


export default AddTodo;