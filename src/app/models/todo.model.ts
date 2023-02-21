export interface Todo {
  id: string;
  title: string;
}

export interface Column {
  id: string;
  title: string
  todo: Todo[]
}
