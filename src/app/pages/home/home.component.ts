import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isMobile= true;
  isTablet= false;
  isDesktop= false;
  constructor(private observer: BreakpointObserver) {}
  ngOnInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    this.observer.observe(['(min-width: 769px) and (max-width: 1023px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isTablet = true;
      } else {
        this.isTablet = false;
      }
    });
    this.observer.observe(['(min-width: 1024px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    });
  }
}
