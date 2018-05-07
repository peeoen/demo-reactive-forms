import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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

  get arrFoods(): FormArray { return this.form.get('foods') as FormArray; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

   createForm() {
    this.form = this.fb.group({
      foods: this.fb.array(this.foods.map(food => {
        console.log(food);
        return this.fb.control(food)
      }))
     })
  }

  click(food) {
    console.log(food);
    console.log(this.form)
  }
  
  // submit(value) {
   
  //   const f = Object.assign({}, value, {
  //     skills: value.skills.map((s, i) => {
  //     return {
  //       id: this.user.skills[i].id,
  //       selected: s
  //     }
  //   })
  //   })
  //    console.log(f);
  // }
}
