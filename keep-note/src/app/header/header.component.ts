import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private auth : AuthService,private route : RouteService) {}
  isAdd=false;
  toggleadd(){
    this.isAdd=!this.isAdd;
  }
  isLoggedIn: boolean = false;
  logout() {
    this.isLoggedIn = false;
    this.auth.logOut();
    this.route.navigateToLoginView();
  }
 
}

