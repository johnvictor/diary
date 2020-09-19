import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diary-ui';

  style = { 'width': '400px', 'margin': '2em', 'height': 'calc(100vh - 6em)', background: '#111633' };
}
