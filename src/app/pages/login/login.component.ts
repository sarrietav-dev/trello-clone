import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  footerLinks: { text: string, url?: string }[] = [
    { text: 'Templates' },
    { text: 'Pricing' },
    { text: 'Apps' },
    { text: 'Jobs' },
    { text: 'Blog' },
    { text: 'Developers' },
    { text: 'About' },
    { text: 'Help' },
    { text: 'Cookie Settings' },
  ]

  authButtons: { text: string, icon?: string, url?: string }[] = [
    { text: 'Sign up with Google' },
    { text: 'Sign up with Microsoft' },
    { text: 'Sign up with Apple' },
    { text: 'Sign up with Slack' },
  ]
}
