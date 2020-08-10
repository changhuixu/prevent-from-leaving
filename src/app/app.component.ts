import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav style="margin: 1rem 0; font-size: 1.25rem;">
      <a routerLink="">my form</a>
      <span style="width: 1rem; display: inline-block;"></span>
      <a routerLink="users">users</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'prevent-from-leaving';
}
