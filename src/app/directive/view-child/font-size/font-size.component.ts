import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-font-size',
  template: `
<button type="button" [disabled]="size === 16" (click)="onSetFontSize(1)">
  增加 1 pt
</button>
<button type="button" [disabled]="size === 10" (click)="onSetFontSize(-1)">
  減少 1 pt
</button>
  `,
  styles: ['button { margin-right: 10pt; }']
})
export class FontSizeComponent {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

	onSetFontSize(value: number): void {
	  this.size += value;
    this.sizeChange.emit(this.size);
	}
}
