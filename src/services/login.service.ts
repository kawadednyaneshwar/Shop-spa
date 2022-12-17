import { Injectable } from '@angular/core';
import { userLogin } from 'src/app/Model/userLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public userSignIn(user: userLogin) {
    let users = window.localStorage.getItem('users');
    if (users) {
      let data = JSON.parse(users ? users : '');
      const exUser = data.find((element: userLogin) => {
        return (
          element.email.toLowerCase() === user.email.toLowerCase() &&
          element.password === user.email
        );
      });
      if (!exUser) {
        data.push(user);
        window.localStorage.setItem('users', JSON.stringify(data));
        return true;
      }
    } else {
      let data = [];
      data.push(user);
      window.localStorage.setItem('users', JSON.stringify(data));
      return true;
    }
    return false;
  }

  public userLogIn(user: userLogin): boolean {
    let data = [];
    debugger;
    let users = window.localStorage.getItem('users');
    data = JSON.parse(users ? users : '');
    const exUser = data.find((element: userLogin) => {
      return (
        element.email.toLowerCase() === user.email.toLowerCase() &&
        element.password === user.password
      );
    });
    return exUser;
  }
}
