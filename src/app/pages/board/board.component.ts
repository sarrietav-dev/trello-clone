import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCross, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { Column, Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  faPlus = faPlus;
  faX = faX;
  isAddingNewColumn = true;
  columnName = new FormControl('');

  todos: Todo[] = [
    {
      id: '1',
      title: 'Todo 1',
    },
    {
      id: '2',
      title: 'Todo 2',
    },
  ];

  doing: Todo[] = [{ id: '3', title: 'Todo 3' }];

  done: Todo[] = [
    {
      id: '4',
      title: 'Todo 4',
    },
  ];

  columns: Column[] = [
    {
      title: 'Todo',
      todo: [...this.todos],
    },
    {
      title: 'Doing',
      todo: [...this.doing],
    },
    {
      title: 'Done',
      todo: [...this.done],
    },
  ];

  drop($event: CdkDragDrop<Todo[]>) {
    if ($event.previousContainer === $event.container)
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    else
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
  }

  addNewColumn(event: SubmitEvent) {
    event.preventDefault();
    this.columns.push({ title: this.columnName.value ?? '', todo: [] });
    this.columnName.setValue('');
  }
}
