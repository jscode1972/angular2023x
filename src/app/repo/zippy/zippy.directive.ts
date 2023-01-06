import { Directive } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Directive({
  selector: '[appZippy]'
})
export class ZippyDirective {

  constructor(public templateRef: TemplateRef<unknown>) {}
}
