import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from './../services/qesution-control.service';
import { QuestionConvertorService } from './../services/question-convertor.service';
import { QuestionService } from './../services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  jsonTxt: string;
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService,
    private questionsService: QuestionService,
    private questionConvertorService: QuestionConvertorService) { }

  ngOnInit() {
    // this.questions = this.questionsService.getQuestions();
    // this.form = this.qcs.toFormGroup(this.questions);
    this.questionsService.getJson('template1').subscribe((res: any[]) => {
        this.loadTemplate(res);
    })
  }



  private loadTemplate(res: any[]) {
  
    this.questions = this.questionConvertorService.getQuestion(res);
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  refreshConfigJson() {
    var obj = JSON.parse(this.jsonTxt);
    this.jsonTxt = this.prettifyJson(this.jsonTxt);
    this.loadTemplate(obj);
  }

  prettifyJson(jsonStr): string {
    var obj = JSON.parse(this.jsonTxt);
    return JSON.stringify(obj, undefined, 4);
  }
}
