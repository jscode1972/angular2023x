import { Directive, Host, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { CustLimitDirective } from './cust-limit.directive';

@Directive({
  selector: '[appCustLimitCase]'
})
export class CustLimitCaseDirective {

  private hasView = false;

  @Input()
  set appLimitCase(value: string) {
    const condition = value === this.limit.appLimit;
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<Object>,
    @Optional() @Host() private limit: CustLimitDirective
  ) { }

}
