import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
const TODOS = [
  { id: 1, text: 'learn angular', done: false, order: 0 },
  { id: 2, text: 'learn react', done: true, order: 1 },
];

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent  {
  user = {
    skills: [
      { name: 'JS',  selected: true, id: 12 },
      { name: 'CSS',  selected: false, id: 2 },
    ]
  }
  form;
  constructor(private fb: FormBuilder) {
     console.clear();
     
     this.form = this.fb.group({
       skills: this.buildSkills()
     });
     
     console.log(this.form.get("skills"))
  }
  
  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  };
  
  
  buildSkills() {
    const arr = this.user.skills.map(s => {
      return this.fb.control(s.selected);
      // return this.fb.group({
      //   selected: [s.selected],
      //   id: [s.id]
      // }
    })
    return this.fb.array(arr);
  }
  
  submit(value) {
   console.log(value)
    const f = Object.assign({}, value, {
      skills: value.skills.map((s, i) => {
        console.log(s)
        console.log(i)
      return {
        id: this.user.skills[i].id,
        selected: s
      }
    })
    })
    
     console.log(f);
  }
}
