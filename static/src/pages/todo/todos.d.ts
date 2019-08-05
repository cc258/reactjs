import { InjectedIntlProps } from "react-intl";

export interface TodosState {}

export interface TodosProps {
  list?: Array<TodoItem>;
  addTodo: Function;
  changeStatus: Function;
  getData: Function;
}

export interface TodoItem {
  st: number;
  txt: string;
}

interface TodoProps extends InjectedIntlProps {
  list?: Array<TodoItem>;
  addTodo?: Function;
  changeStatus: Function;
  getData: Function;
}

export interface TodoState {
  newTodo?: string;
  name?: string;
}
