export interface TodosState {}

export interface TodosProps {
  list?: Array<TodoItem>;
  addTodo: Function;
  changeStatus: Function;
  getData: Function;
}

export interface TodoItem {
  st: number;
  text: string;
}
