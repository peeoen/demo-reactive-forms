import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../../../models/question-base';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input() question: QuestionBase<any> = new QuestionBase<any>();
  @Input() form: FormGroup;
  

  constructor() { }

  ngOnInit() {
  }

}
