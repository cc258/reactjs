import React from "react";
import TodoList from "./todolist.jsx";
import { FormattedMessage, injectIntl } from "react-intl";

class Todo extends React.Component {
  // 初始化state (ES7) 或者在构造函数(constructor)中初始化state (ES6)
  state = {
    newTodo: "",
    name: "Leo"
  };

  render = () => {
    const { name, newTodo } = this.state;
    const { list, changeStatus, getData } = this.props;
    console.log("PROPS:", this.props);
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <h1 onClick={getData}>
          <FormattedMessage id="examples_todo_index_title" values={{ name }} />
        </h1>
        <h1 onClick={getData}>
          {formatMessage(
            { id: "examples_todo_index_title_message" },
            { name: "Leo" }
          )}
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

  setNewTodo = e => {
    console.log(e.target.value);
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

export default injectIntl(Todo);
