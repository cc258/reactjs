import { MouseEvent } from "react";

export interface TodosState {}

export interface TodosProps {
  list?: Array<TodoItem>;
  addTodo: Function;
  changeStatus: (list: Array<TodoItem>, item: TodoItem, idx: number) => void;
  getData: () => void;
}
export interface TodoListProps {
  list: Array<TodoItem>;
  changeStatus: (list: Array<TodoItem>, item: TodoItem, idx: number) => void;
}

export interface TodoItem {
  st: number;
  txt: string;
}

interface TodoProps {
  list?: Array<TodoItem>;
  addTodo?: Function;
  changeStatus: (list: Array<TodoItem>, item: TodoItem, idx: number) => void;
  getData: () => void;
}

export interface TodoState {
  newTodo?: string;
  name?: string;
}
