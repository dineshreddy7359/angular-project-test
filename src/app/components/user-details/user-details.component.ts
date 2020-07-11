import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  userList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.formControls();
  }

  formControls() {
    this.userForm.addControl('userName', new FormControl('', [Validators.required]));
    this.userForm.addControl('emailId', new FormControl('', [Validators.required]));
    this.userForm.addControl('password', new FormControl('', [Validators.required]));
    this.userForm.addControl('role', new FormControl('', [Validators.required]));
  }

  user() {
    const formValues = this.userForm.value;
    const userObject = {
      userName: formValues.userName,
      emailId: formValues.emailId,
      password: formValues.password,
      role: formValues.role,
    }
    this.userList.push(userObject);
  }

}
