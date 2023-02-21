import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo, Column } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private todos: Todo[] = [
    {
      id: '1',
      title: 'Todo 1',
    },
    {
      id: '2',
      title: 'Todo 2',
    },
  ];

  private doing: Todo[] = [{ id: '3', title: 'Todo 3' }];

  private done: Todo[] = [
    {
      id: '4',
      title: 'Todo 4',
    },
  ];

  columnSubject = new BehaviorSubject<Column[]>([
    {
      id: '1',
      title: 'Todo',
      todo: [...this.todos],
    },
    {
      id: '2',
      title: 'Doing',
      todo: [...this.doing],
    },
    {
      id: '3',
      title: 'Done',
      todo: [...this.done],
    },
  ]);

  private get columns(): Column[] {
    return this.columnSubject.getValue();
  }

  private get totalColumns(): number {
    return this.columns.length;
  }

  addNewColumn(title: string) {
    this.columns.push({
      title,
      todo: [],
      id: (this.totalColumns + 1).toString(),
    });
  }

  addTask(id: string, taskTitle: string) {
    const { column, columnIndex } = this.getColumn(id);

    column.todo.push({
      id: (column.todo.length + 1).toString(),
      title: taskTitle,
    });

    const newColumns = [...this.columns];
    newColumns[columnIndex] = column;

    this.columnSubject.next(newColumns);
  }

  private getColumn(id: string): { column: Column; columnIndex: number } {
    const selectedColumn = this.columns.filter((column) => column.id === id);
    if (selectedColumn.length === 0) throw new Error('');
    const selectedColumnIndex = this.columns.indexOf(selectedColumn[0]);
    return { column: selectedColumn[0], columnIndex: selectedColumnIndex };
  }
}
