import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Vinicius";

  userData = {
    email: 'vinicius@gmail.com',
    role: 'admin'
  }
  title = 'angular-basic';
}
