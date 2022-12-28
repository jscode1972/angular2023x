import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustButton]',
  exportAs: 'customButton'
})
export class CustButtonDirective implements OnInit {

  constructor(private elRef: ElementRef, 
              private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '14pt');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'bold');
  }

  changeColor(color: string): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
  }
}
