import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '1';
  password = '1';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('sessionUser',this.username);
    this.router.navigateByUrl("/create");
  }

}
