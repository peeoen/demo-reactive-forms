import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;

  foods: any[] = [
    {
      id: 1,
      name:  'lamb',
      price: 20,
      checked: true
    },
    {
      id: 2,
      name:  'beef',
      price: 30,
      checked: false
    },
    {
      id: 3,
      name:  'fish',
      price: 40,
      checked: true
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

   createForm() {
    this.form = this.fb.group({
      foods: this.fb.array(this.foods.map(food => {
        return this.fb.control(food, Validators.required)
      }))
     })
  }
}
