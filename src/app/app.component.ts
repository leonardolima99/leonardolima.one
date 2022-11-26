import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  prevent(e: SubmitEvent) {
    e.preventDefault();
  }
  title = 'leonardolima.one';
  faBars = faBars;
}
