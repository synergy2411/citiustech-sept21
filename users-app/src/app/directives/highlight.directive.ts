import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector : '[appHighlight]'
})
export class HighlightDirective{

  @HostBinding('style.backgroundColor')
  bgColor : any;

  @Input() favColor : string;
  @Input() myProp : {border : string};

  @HostListener('mouseenter')
  onmouseenter(){
    // console.log("Who's this");
    // this.bgColor = 'grey';
    this.renderer.setStyle(this.elRef.nativeElement, 'border', this.myProp.border)
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', this.favColor)
  }

  @HostListener('mouseleave')
  onmouseleave(){
    // this.bgColor = 'transparent';
    this.renderer.removeStyle(this.elRef.nativeElement, 'backgroundColor')
  }

  constructor(private elRef : ElementRef, private renderer : Renderer2){
    // console.log(this.elRef.nativeElement);
    // this.elRef.nativeElement.style.backgroundColor = 'aqua';
    // this.renderer.setAttribute(this.elRef.nativeElement, "style.backgroundColor", "yellow")
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow')

    }
}


// Class level <div class="my-directive">
// Attribute level <div my-directive>
// element level <my-directive> - Components


