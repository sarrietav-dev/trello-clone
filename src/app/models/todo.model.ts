export interface Todo {
  id: string;
  title: string;
}

export interface Column {
  title: string
  todo: Todo[]
}
