import React, { Component } from "react";
import MyInput from "./../ui/myInput/MyInput";
import MyButton from "./../ui/myButton/MyButton";

class TodoClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { body: "fdfd", title: "fdff" },
    };
    this.addNewTodos = this.addNewTodos.bind(this);
  }
  addNewTodos = (e) => {
    e.preventDefault();
    const newTodos = {
      ...this.todo,
      id: Math.random(),
    };
    this.create(newTodos);
  };
  render() {
    return (
      <div>
        <MyInput
          type="text"
          value={this.todo.title}
          onChange={(e) =>
            this.setState({ ...this.todo, title: e.target.value })
          }
        />
        <MyInput
          type="text"
          value={this.todo.body}
          onChange={(e) =>
            this.setState({ ...this.todo, body: e.target.value })
          }
        />
        <MyButton onClick={this.addNewTodos}>Create Todo</MyButton>
      </div>
    );
  }
}

export default TodoClassForm;
