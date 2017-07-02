import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">MOS codes</a>
    <a routerLink="/heroes" routerLinkActive="active">MOC codes</a>
    <a routerLink="/demo" routerLinkActive="active">Demo Data</a>
  </nav>
  <router-outlet></router-outlet>
`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'VetTech LLC';
}
