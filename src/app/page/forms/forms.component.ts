import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public myForm: FormGroup;

  constructor(public _fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this._fb.group({
      firstName: ['Mervyn', Validators.required],
      lastName: ['Zhang', Validators.required],
      email: ['foreverzmyer@gmail.com', Validators.email],
      address: this._fb.group({
        city: ['', Validators.required],
        country: ['', Validators.required],
        postcode: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
      }),
      about: ['', [Validators.required, Validators.maxLength(5)]]
    });
  }

  formChanged() {
    this.myForm.valueChanges.subscribe(data => console.log(data));
  }

  submit() {
    console.log(this.myForm.value);
  }

}
