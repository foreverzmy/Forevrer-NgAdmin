import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CityService } from '../../../services/forms/city.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
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
  // 创建响应式表单
  createForm() {
    this.myForm = this._fb.group({
      firstName: ['Mervyn', Validators.required],
      lastName: ['Zhang', Validators.required],
      sex: ['', Validators.required],
      hobbies: this._fb.group({
        music: [false],
        movies: [false],
        sports: [false]
      }),
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
    this.getCity();
    console.log(this.myForm.value);
  }
  // 获取国家和城市列表
  getCity() {
    this._city.getCity().subscribe(data => console.log(data));
    // this.countries = data
  }
  // 联动选择
  choose(level, key) {
    switch (level) {
      case 1:
        this.provinces = this.countries[key].s;
        this.myForm.patchValue({
          address: { province: '', city: '', district: '' }
        });
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

