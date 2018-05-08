import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  form: FormGroup;

  foods: any[] = [
    {
      name:  'lamb',
      price: 20
    },
    {
      name:  'beef',
      price: 30
    },
    {
      name:  'fish',
      price: 40
    }
  ]
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
     this.form = this.fb.group({
       food: this.fb.control(this.foods[0])
     })
  }
}
