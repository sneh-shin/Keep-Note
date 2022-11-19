import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fg : FormBuilder,private auth : AuthService,private route : RouteService,private header :HeaderComponent) { }

  ngOnInit(): void {
  }

  user = this.fg.group({
    username: ['', Validators.required],
    password : ['',Validators.required]
  })

  submit(user:any) {
    if (user) {
      const username = user.get('username').value;
      const password = user.get('password').value;
      if (this.auth.login(username, password)) {
        this.header.isLoggedIn = true;
        this.auth.isLoggedIn = true;
        this.route.navigateToNoteReqestView();
      }
      else {
        alert("Invalid credentials");
      }
    }
  }

}
