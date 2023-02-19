import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [AppComponent, BoardsComponent, NavbarComponent, BtnComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
