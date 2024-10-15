import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private auth : AuthService, private route : Router){}

  registrationForm = new FormGroup({
    userName : new FormControl("", [Validators.required]),
    password : new FormControl("", [Validators.required, Validators.minLength(4)]),
  });
  onLogin() {
    if (this.registrationForm.valid) {
      const usernamee = this.registrationForm.value.userName as string;
      const passwordd = this.registrationForm.value.password as string;

      this.auth.login(usernamee, passwordd);

      if(this.auth.isLoggedIn==true){
          this.route.navigate(["/dashboard"]);
      }
  }
}

}
