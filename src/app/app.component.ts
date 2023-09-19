import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUserLogined: any = false;
  constructor(private Auth: AuthService) { }
  title = 'DocumentPos';

  ngOnInit(): void {
    this.isUserLogined = this.Auth.isUserLogined;
  }
}
