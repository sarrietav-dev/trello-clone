import { Dialog } from '@angular/cdk/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
import { Column, Todo } from 'src/app/models/todo.model';
import { TaskService } from 'src/app/service/task/task.service';

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
export class BoardComponent implements OnInit {
  constructor(private taskService: TaskService, private dialog: Dialog) {}

  faPlus = faPlus;
  faX = faX;

  isAddingNewColumn = false;
  columnsInsertingCards: string[] = [];

  newColumn = new FormControl('');
  newTask = new FormControl('');

  columns: Column[] = [];

  ngOnInit(): void {
    this.taskService.columnSubject.subscribe(
      (columns) => (this.columns = columns)
    );
  }

  openDialog(todo: Todo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo
      }
    })

    dialogRef.closed.subscribe((value) => {
      console.log(value)
    })
  }

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

  onAddTask(columnId: string) {
    this.taskService.addTask(columnId, this.newTask.value ?? '');

    this.removeColumnFromInsertingCards(columnId);

    this.newTask.setValue('');
  }

  onAddColumn($event: SubmitEvent) {
    $event.preventDefault();

    this.taskService.addNewColumn(this.newColumn.value ?? '');

    this.newColumn.setValue('');
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
