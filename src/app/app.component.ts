import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  prevent(e: SubmitEvent | MouseEvent) {
    e.preventDefault();
  }
  title = 'leonardolima.one';
  faBars = faBars;
  linkActive: string = '';
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  handleCloseMenu(event: MouseEvent) {
    const hash = (event.target as HTMLAnchorElement).hash;
    this.linkActive = hash;
    if (hash === '') {
      event.preventDefault();
      window.location.hash = '';
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    this.menuActive = false;
  }
}
