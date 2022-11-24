import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCtrlData]'
})
export class CtrlDataDirective {

  constructor(private _element: ElementRef) { }
  @Input() appCtrlData: string = "";

  @HostListener('blur') OnBlur() {
    let regexp = new RegExp(this.appCtrlData);
    if (!regexp.test(this._element.nativeElement.value)) {
      this._element.nativeElement.style.backgroundColor = 'red';
    } else {
      this._element.nativeElement.style.backgroundColor = 'white';
    }
  }
}
