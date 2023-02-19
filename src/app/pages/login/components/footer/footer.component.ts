import { Component, Input } from '@angular/core';

@Component({
  selector: 'login-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() links: { text: string; url?: string }[] = [];
}
