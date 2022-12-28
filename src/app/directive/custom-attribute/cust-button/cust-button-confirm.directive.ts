import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCustButtonConfirm]'
})
export class CustButtonConfirmDirective {

  @Input('appButtonConfirm') message!: string;
  @Output() confirm = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (confirm(this.message)) {
      this.confirm.emit();
    }
  }
}
