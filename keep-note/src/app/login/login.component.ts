import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fg : FormBuilder) { }

  ngOnInit(): void {
  }

  user = this.fg.group({
    username: ['', Validators.required],
    password : ['',Validators.required]
  })

  submit(user:any) {
    
  }

}
