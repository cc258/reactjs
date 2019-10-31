// Ducks

import axios from "axios";
import { Dispatch } from "redux";
import { TodoProps, TodoState, TodoItem } from "./todos.d";

// Actions
const TODO_ADD = "TODO_ADD";
const TODO_CHANGE = "TODO_CHANGE";
const TODO_GETDATA = "TODO_GETDATA";

// Reducer

const initState = {};
export default (state = initState, action: any) => {
  const data = action.data;
  switch (action.type) {
    case TODO_ADD:
      return Object.assign({}, state, data);
    case TODO_CHANGE:
      return Object.assign({}, state, data);
    case TODO_GETDATA:
      return Object.assign({}, state, data);
    default:
      return state;
  }
};

// Action Creators
export const actions = {
  addTodo: (ls: Array<TodoItem>, d: string) => {
    // 这个坑，我踩哭了，数组部分更新不会render
    const list = ls.slice();
    list.unshift({ st: 0, txt: d });
    const payData = { list };
    return { type: TODO_ADD, data: payData };
  },

  changeStatus: (ls: Array<TodoItem>, item: TodoItem, idx: number) => {
    const list = ls.slice();
    list[idx] = item;
    const payData = { list };
    return { type: TODO_CHANGE, data: payData };
  },

  getData: (e: MouseEvent) => (dispatch: Dispatch) => {
    axios
      .get("/v1/telematics/vehicles/L6T7944Z5GN400022/tem/last-reset-time")
      .then(res => {
        const data = res.data;
        dispatch({ type: TODO_GETDATA, data });
      });
  }
};
