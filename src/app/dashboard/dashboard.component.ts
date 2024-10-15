import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registrationForm: FormGroup;
  registeredData: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiserviceService) {
    this.registrationForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.apiService.registeredData$.subscribe(data => {
      this.registeredData = Array.isArray(data) ? data : [];
      console.log('Registered Data:', this.registeredData);
    });

    this.apiService.getUserData().subscribe(
      data => {
        this.apiService.updateRegisteredData(data);
      },
      error => console.error('Error fetching user data:', error)
    );
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValue = this.registrationForm.value;
      const newUser = {
        id: formValue.id,
        name: formValue.name,
        email: formValue.email,
        address: {
          street: formValue.address,
          suite: '',
          city: '',
          zipcode: ''
        }
      };
      console.log('New user data:', newUser);

      // Update the registered data
      this.apiService.updateRegisteredData([...this.registeredData, newUser]);

      // Clear the form
      this.registrationForm.reset();
    }
  }

  // Helper method to safely access nested properties
  getNestedProperty(obj: any, path: string): any {
    return path.split('.').reduce((o, key) => (o && o[key] !== undefined) ? o[key] : '', obj);
  }
}