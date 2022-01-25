import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') couleur?: string;
  @HostListener('window:keydown', ['$event']) windowClick($event) {
    if ($event.key == "ArrowUp") {
      this.couleur = 'red'
    } else if ($event.key == "ArrowDown") {
      this.couleur = 'green'
    } else if ($event.key == "ArrowLeft") {
      this.couleur = 'orange'
    } else if ($event.key == "ArrowRight") {
      this.couleur = 'blue'
    } else {
      this.couleur = 'black'
    }
  }

  constructor() { }

}
