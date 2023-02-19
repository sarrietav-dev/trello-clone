import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  footerLinks: { text: string; url?: string }[] = [
    { text: 'Templates' },
    { text: 'Pricing' },
    { text: 'Apps' },
    { text: 'Jobs' },
    { text: 'Blog' },
    { text: 'Developers' },
    { text: 'About' },
    { text: 'Help' },
    { text: 'Cookie Settings' },
  ];

  authButtons: { text: string; iconUrl: string; url?: string }[] = [
    {
      text: 'Google',
      iconUrl: 'https://img.icons8.com/color/30/null/google-logo.png',
    },
    {
      text: 'Microsoft',
      iconUrl: 'https://img.icons8.com/color/30/null/microsoft.png',
    },
    {
      text: 'Apple',
      iconUrl: 'https://img.icons8.com/ios-glyphs/30/null/mac-os.png',
    },
    {
      text: 'Slack',
      iconUrl: 'https://img.icons8.com/color/48/null/slack-new.png',
    },
  ];
}
