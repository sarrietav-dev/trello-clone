import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  faClose = faClose
  faCheckToSlot = faCheckToSlot
  faBars = faBars
  faUser = faUser
  faTag = faTag
  faCheckSquare = faCheckSquare
  faClock = faClock

  constructor(private dialogRef: DialogRef) {}

  close() {
    this.dialogRef.close()
  }
}
