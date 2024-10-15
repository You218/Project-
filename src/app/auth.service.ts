import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn: boolean = false;
  validUsername: string = "Rishabh";
  validPassword: string = "12345";

  login(userName:string, password:string){
    if(userName==this.validUsername && password==this.validPassword){
      this.isLoggedIn=true;
      console.log("Login Successful");

    }
    else{
      this.isLoggedIn = false;
      console.log("Login Unsuccessful")
    }
  }

  loggedOut(){
    this.isLoggedIn = false;
  }

  isAuth(){
    return this.isLoggedIn;
  }

}
