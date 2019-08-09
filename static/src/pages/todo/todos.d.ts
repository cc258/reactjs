import { InjectedIntlProps } from "react-intl";

export interface TodosState {}

export interface TodosProps {
  list?: Array<TodoItem>;
  addTodo: Function;
  changeStatus: Function;
  getData: Function;
}
export interface TodoListProps {
  list: Array<TodoItem>;
  changeStatus: Function;
}

export interface TodoItem {
  st: number;
  txt: string;
}

interface TodoProps extends InjectedIntlProps {
  list?: Array<TodoItem>;
  addTodo?: Function;
  changeStatus: Function;
  getData: () => void;
}

export interface TodoState {
  newTodo?: string;
  name?: string;
}
