import React, { ChangeEvent } from "react";
import TodoList from "./todolist";
import { FormattedMessage, injectIntl, InjectedIntlProps } from "react-intl";
import { TodoProps, TodoState, TodoItem } from "./todos.d";

class Todo extends React.Component<TodoProps & InjectedIntlProps, TodoState> {
  // 初始化state (ES7) 或者在构造函数(constructor)中初始化state (ES6)
  state = {
    newTodo: "",
    name: "Leo"
  };

  render = () => {
    const { name, newTodo } = this.state;
    const { list, changeStatus, getData } = this.props;
    const { formatMessage, messages } = this.props.intl;
    return (
      <div className="todo">
        <h1 onClick={getData}>
          {formatMessage(messages.examples_todo_index_title)}
        </h1>
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

export default injectIntl<TodoProps>(Todo);
