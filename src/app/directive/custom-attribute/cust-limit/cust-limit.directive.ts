import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustLimit]'
})
export class CustLimitDirective {

  @Input() appLimit!: string;
  
  constructor() { }

}
