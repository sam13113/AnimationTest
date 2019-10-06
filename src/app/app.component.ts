import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {  routerTransition } from './animations/app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition()]
})
export class AppComponent {
 constructor(private router: Router ) {

 }
 private getPreviousPage(): void {
  this.router.navigateByUrl('department');
}
 private getNextPage(): void {
    this.router.navigateByUrl('courses');
  }
  private prepareRoute(outlet: RouterOutlet) {
    // outlet && outlet.activatedRouteData &&
    return  outlet.activatedRouteData.animation;
  }
}
