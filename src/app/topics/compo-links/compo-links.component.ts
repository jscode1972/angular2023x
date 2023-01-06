import { Component } from '@angular/core';

import { stackblitz } from 'src/app/shared';

@Component({
  selector: 'app-compo-links',
  templateUrl: './compo-links.component.html',
  styleUrls: ['./compo-links.component.css']
})
export class CompoLinksComponent {
  blitz = stackblitz.component;
}
