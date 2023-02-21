import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
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
  isAddingNewColumn = false;
  columnsInsertingCards: string[] = [];
  newColumn = new FormControl('');
  newTask = new FormControl('');
  idCount = 4;

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

  columns: Column[] = this.columnSubject.getValue();

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
    this.columns.push({
      title: this.newColumn.value ?? '',
      todo: [],
      id: (this.idCount++).toString(),
    });
    this.newColumn.setValue('');
  }

  addCard(id: string) {
    const selectedColumn = this.columns.filter((column) => column.id === id);
    if (selectedColumn.length === 0) return;

    selectedColumn[0].todo.push({ id: '', title: this.newTask.value ?? '' });

    const selectedColumnIndex = this.columns.indexOf(selectedColumn[0]);

    const newColumns = [...this.columns];
    newColumns[selectedColumnIndex] = selectedColumn[0];

    this.columnSubject.next(newColumns);

    this.removeColumnFromInsertingCards(id);

    this.newTask.setValue('');
  }

  addColumnToInsertingCards(id: string) {
    if (this.columnsInsertingCards.some((columnId) => columnId === id)) return;
    this.columnsInsertingCards.push(id);
  }

  removeColumnFromInsertingCards(id: string) {
    this.columnsInsertingCards = this.columnsInsertingCards.filter(
      (columnId) => columnId !== id
    );
  }

  isColumnInsertingCards(id: string) {
    return this.columnsInsertingCards.some((columnId) => columnId === id);
  }
}
