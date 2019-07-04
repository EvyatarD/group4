import { Directive, HostBinding,HostListener, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMColor]'
})
export class MColorDirective  {

  @HostBinding('style.color') color: string;

  colors: object;

  constructor(private render: Renderer2, private el: ElementRef) { 
    this.colors = {
      January: "red",
      February: "blue",
      March: "green",
      April: "black",
      May: "purple",
      June: "yellow",
      July: "pink",
      August: "gray",
      September: "brown",
      October: "cyan",
      November: "beige",
      December: "orange"
    }
  
  }


ngOnInit() {

}

@HostListener ('keyup') monthColor(){ 
  console.log(this.el.nativeElement);
  this.render.setStyle(this.el.nativeElement, 'color', "red");
  
}

  
  // switch (this.el.nativeElement.innerText) {

  //   case "January":
  //     this.render.setStyle(this.el.nativeElement, 'color', 'red');
  //     break;

  //   case "February":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'blue');
  //     break;
  //   case "March":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'green');
  //     break;
  //   case "April":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'black');
  //     break;
  //   case "May":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'purple');
  //     break;
  //   case "June":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'yellow');
  //     break;

  //   case "July":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'pink');
  //     break;

  //   case "August":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'gray');
  //     break;

  //   case "September":
  //     this.render.setStyle(this.el.nativeElement, 'color', 'brown');
  //     break;

  //   case "October":

  //     this.render.setStyle(this.el.nativeElement, 'color', 'cyan');
  //     break;

  //   case "November":
  //     this.render.setStyle(this.el.nativeElement, 'color', 'beige');
  //     break;


  //   case "December":
  //     this.render.setStyle(this.el.nativeElement, 'color', 'orange');
  //     break;

  // }
}

