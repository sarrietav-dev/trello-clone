import { Component, Input } from '@angular/core';

@Component({
  selector: 'login-auth-button',
  templateUrl: './auth-button.component.html',
})
export class AuthButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
}
