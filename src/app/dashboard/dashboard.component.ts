import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  regData : any;
  registrationForm: FormGroup;

  constructor(private userData : ApiserviceService, private api: ApiserviceService) {
    this.registrationForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });

    api.User().subscribe((data)=>{
      this.regData = data;
      console.log(data);
    })
  }





  onSubmit(){

  }


}
