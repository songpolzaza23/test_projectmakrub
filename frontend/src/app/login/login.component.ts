import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user/user.service';
import { from } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  model = {
    username: '',
    password: ''
  }

  ngOnInit(){
    // if(this.userService.isLoggedIn())
    // this.router.navigateByUrl('/home');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/home');
        // this.userService.deleteToken();
      },
      err => {

      }
    );
  }


  // onLogin(){
  //   this.router.navigate(['/home']);
  // }
}