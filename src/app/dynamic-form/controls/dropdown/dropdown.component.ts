import { QuestionBase } from './../../../models/question-base';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() question: QuestionBase<any> = new QuestionBase<any>();
  @Input() form: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
