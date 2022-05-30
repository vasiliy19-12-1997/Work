import React, {useState} from "react";
import { v3 } from "uuid";
import {v1 as uuid} from 'uuid';
import { Row, Col, Button, FormControl} from "react-bootstrap";
import s from './AddToDo.module.css';
function AddToDo({setTodo, todo}){

    const [value, setValue] = useState('');
    // console.log(value);
    function saveToDo(){
        setTodo(
            [...todo, {
                id: uuid(v3),
                title: value,
                status: true,
            }]
        );
        setValue('');
    }
    return(
            <Row>
                <Col className={saveToDo.addToDoForm}>
                    <FormControl placeholder="Введите задачу" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <Button className={s.btn} onClick={saveToDo}>Save</Button>
                </Col>
            </Row>
            
        
    )
}
export default AddToDo;

