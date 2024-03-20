import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject } from 'rxjs';
import { LookAndFeelRepository } from 'src/core/repositories/lookAndFeel.repository';
import { LookAndFeelModel } from 'src/core/models/urlToProgram.model';
import { applyTheme } from 'src/styleLoad';
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test-angular-daniel';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isTablet= false;
  isDesktop= false;
  
  isCollapsed = true;

  constructor(
    private lookAndFeelRepository: LookAndFeelRepository, 
    private observer: BreakpointObserver
  ) {}
  ngOnInit() {

    this.loadStyles();

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
  loadStyles(){
    console.log('llego a load styles');
    this.lookAndFeelRepository.getLookAndFeel().subscribe(data =>  {
      console.log('rta es:');
      console.log(data)
      applyTheme(data.lookAndFeel);
    });
    
  }
  toggleMenu() {
    if(this.isMobile || this.isTablet){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile/tablet, the menu can never be collapsed
    
    } else {
      this.sidenav.open(); // On desktop, the menu can never be fully closed
      // this.isCollapsed = !this.isCollapsed;
      this.isCollapsed = true;
      // do nothing for now
    }
  }
}

