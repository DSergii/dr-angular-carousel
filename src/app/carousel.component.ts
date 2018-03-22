import { Component, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dr-carouse',
  template: `
  	<div class="dr-carousel-holder">
  		<ul class="dr-carousel">
  			<li *ngFor="let item of elements">
          <img [src]="item" >
        </li>
  		</ul>
  	</div>
  `,
  styleUrls: ['./app.component.css']
})
export class CarouselComponent implements AfterViewInit {

  @Input() elements: Array<string>;
  private carouselItems;
  private carousel;

  constructor(
      private el: ElementRef,
      private render: Renderer2,
  ) {}

  ngAfterViewInit() {

      if(this.elements && this.elements.length == 0) {
          console.error('There is no any images. Please add one or more images!');
      } else {
          this.carousel = this.el.nativeElement.getElementsByClassName('dr-carousel');
          this.carouselItems = this.el.nativeElement.getElementsByTagName('li');
          this.moveSliders(this.carousel[0], this.carouselItems);
      }
  }

  moveSliders(carousel, items) {
      let active: number = 0;
      let offset = 0;

      const change = (element: number) => {

          if(element != active) {

              if(element == items.length) {
                  offset = 0;
                  element = 0;
                  active = 0;
                  this.render.removeClass(items[element], 'active');
                  this.render.setStyle(carousel, 'margin-left', '0px');
              } else {
                  offset += -1300;
                  this.render.addClass(items[active], 'active');
                  this.render.setStyle(carousel, 'margin-left', offset + 'px')
              }

              active = element;
          }
      };

      setInterval(()=> {
          change(active + 1);
      }, 2000);
  }

}

