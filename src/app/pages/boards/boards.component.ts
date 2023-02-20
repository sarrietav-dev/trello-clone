import { Component } from '@angular/core';
import { faTrello, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faBox,
  faClock,
  faGear,
  faHeart,
  faHouse,
  faUsers,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';
import { sky, rose, green, yellow } from 'tailwindcss/colors';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  boards: { title: string; color: string }[] = [
    {
      title: 'Demo',
      color: sky[600],
    },
    {
      title: 'Demo2',
      color: rose[600],
    },
    {
      title: 'Demo3',
      color: green[600],
    },
    {
      title: 'Demo3',
      color: yellow[600],
    },
  ];
  links: { icon: IconDefinition; title: string }[] = [
    {
      icon: faTrello,
      title: 'Boards',
    },
    {
      icon: faBox,
      title: 'Templates',
    },
    {
      icon: faHouse,
      title: 'Home',
    },
  ];
}
