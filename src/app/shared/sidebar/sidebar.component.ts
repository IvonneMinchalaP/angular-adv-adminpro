import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
  export class SidebarComponent implements OnInit{

    menuItems: any[];

    constructor(private sidebarServices:SidebarService){
      this.menuItems = sidebarServices.menu;
    }

  ngOnInit(): void {

    
  }
}
