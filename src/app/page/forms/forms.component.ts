import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CityService } from '../../services/forms/city.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public myForm: FormGroup;
  public countries: any[];
  public provinces: any[];
  public cities: any[];
  public districts: any[];

  constructor(
    public _fb: FormBuilder,
    public _city: CityService,
  ) { }

  ngOnInit() {
    this.createForm();
    this.getCity();
  }

  createForm() {
    this.myForm = this._fb.group({
      firstName: ['Mervyn', Validators.required],
      lastName: ['Zhang', Validators.required],
      email: ['foreverzmyer@gmail.com', Validators.email],
      address: this._fb.group({
        country: [''],
        province: [''],
        city: [''],
        district: [''],
        // postcode: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
      }),
      about: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  formChanged() {
    this.myForm.valueChanges.subscribe(data => console.log(data));
  }

  submit() {
    console.log(this.myForm.value);
  }

  getCity() {
    this._city.getCity().subscribe(data => this.countries = data);
  }

  choose(level, key) {
    switch (level) {
      case 1:
        this.provinces = this.countries[key].s;
        this.myForm.patchValue({ address: { province: '', city: '', district: '' } });
        delete this.cities;
        delete this.districts;
        break;
      case 2:
        this.cities = this.provinces[key].s;
        this.myForm.patchValue({ address: { city: '', district: '' } });
        delete this.districts;
        break;
      case 3:
        this.districts = this.cities[key].s;
        this.myForm.patchValue({ address: { district: '' } });
        break;
      default: break;
    }
  }

}
