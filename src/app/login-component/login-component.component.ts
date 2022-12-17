import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { userLogin } from '../Model/userLogin'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [LoginService],
})
export class LoginComponentComponent {
  loggedin: boolean = false;
  signin: boolean = false;
  email: string;
  userName: string;
  password: string;


  constructor(private service: LoginService) { 
    this.email = '';
    this.userName = '';
    this.password = '';
  }

  ngOnInit() { 

  }

  public signUp() {
    this.signin = this.service.userSignIn({email: this.email,password: this.password,userName: this.userName});
  }

  public logIn() {
    this.loggedin = this.service.userLogIn({email: this.email,password: this.password,userName: ''});
  }

}
