import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

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

  drop($event: CdkDragDrop<Todo[]>) {
    if ($event.previousContainer === $event.container)
      moveItemInArray(this.todos, $event.previousIndex, $event.currentIndex);
    else
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
  }
}
