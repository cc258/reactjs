import React, { ChangeEvent, lazy } from "react";

import { TodoProps, TodoState } from "./todos.d";
import TodoList from "./todolist";

class Todo extends React.PureComponent<TodoProps, TodoState> {
  // 初始化state (ES7) 或者在构造函数(constructor)中初始化state (ES6)
  state = {
    newTodo: "",
    name: "Leo"
  };

  componentDidMount() {
    const canvas: any = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, 100, 100);
  }

  render = () => {
    const { name, newTodo } = this.state;
    const { list, changeStatus, getData } = this.props;
    return (
      <div className="todo">
        <h1 onClick={getData}>
          {/* {formatMessage(messages.todo_index_title, { name })} */}
          hello Leo!
        </h1>
        <canvas ref="canvas" width={100} height={100} />
        <div className="new">
          <input
            className="newInput"
            type="text"
            value={newTodo}
            onChange={this.setNewTodo}
          />
          <span onClick={this.handleTodo}>+</span>
        </div>
        <TodoList list={list} changeStatus={changeStatus} />
      </div>
    );
  };

  setNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    // 替换前后空格
    const d = e.target.value.replace(/(^\s*)|(\s*$)/g, "");

    this.setState({
      newTodo: d
    });
  };

  handleTodo = () => {
    const { newTodo } = this.state;
    const { list, addTodo } = this.props;
    if (!newTodo.length) {
      return;
    }
    addTodo(list, newTodo);
    this.setState({
      newTodo: ""
    });
  };
}

export default Todo;
