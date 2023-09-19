import { Component } from '@angular/core';
import { AuthService } from '../auth/Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isUserLogined: boolean = false;
  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
    this.isUserLogined = this.Auth.isUserLogined();
  }
}
