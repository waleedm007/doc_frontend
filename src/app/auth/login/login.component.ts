import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private user: AuthService, private router: Router) { }
  ngOnInit(): void {
    let user = this.user.isUserLogined();
    if (user) {
      this.router.navigate(['home']);
    }
  }
  login(data: any) {
    this.user.userLogin(data);
  }
}
