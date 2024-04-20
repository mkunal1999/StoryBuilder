import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    private router: Router
) {}

active_home="activate"
active_story=false

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    console.log(route)
    if("/home"===route){
      this.active_home="activate";
    }
    else if("/story_builder"===route){
      this.active_story=true;
    }
    return false;
  }
  

}
