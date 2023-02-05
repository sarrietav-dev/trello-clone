import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';


@NgModule({
  declarations: [LoginComponent, FooterComponent, AuthButtonComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
