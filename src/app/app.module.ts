import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardComponent } from './pages/board/board.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './pages/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    NavbarComponent,
    BtnComponent,
    BoardComponent,
    TodoDialogComponent,
    ScrollComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    ReactiveFormsModule,
    DialogModule,
    HttpClientModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
