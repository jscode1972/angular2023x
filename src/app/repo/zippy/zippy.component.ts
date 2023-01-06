import { Component, ContentChild  } from '@angular/core';
import { ZippyDirective } from './zippy.directive';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @ContentChild(ZippyDirective) content!: ZippyDirective;

}
