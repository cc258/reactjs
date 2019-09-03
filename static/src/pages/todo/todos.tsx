import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";

import { actions } from "./todos.reducer";
import { TodosProps, TodosState } from "./todos.d";
const Todo = lazy(() => import("./todo"));

class Todos extends React.Component<TodosProps, TodosState> {
  // 使用在方法中箭头函数来替代this.handleExpand.bind(this)
  // 提示： class严格来讲不是一个对象，class内定义的属性和方法并不需要用逗号','隔开。
  render = () => {
    const { list = [], addTodo, changeStatus, getData } = this.props;

    return (
      <div className="pages todos">
        <div className="todo-list">
          <Todo
            list={list}
            addTodo={addTodo}
            changeStatus={changeStatus}
            getData={getData}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state: any) => state.todos;

const mapDispatchToProps = actions;

export default connect<TodosProps, TodosState, TodosProps>(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
