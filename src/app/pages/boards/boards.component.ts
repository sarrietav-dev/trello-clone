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

type Accordion = {
  label: string;
  items?: Accordion[];
};

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

  items: Accordion[] = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Subitem 1.1',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Subitem 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Subitem 3.1',
        },
        {
          label: 'Subitem 3.2',
        },
        {
          label: 'Subitem 3.3',
        },
      ],
    },
  ];

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
