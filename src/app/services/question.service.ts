import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/question-base';
import { DropdownQuestion } from '../models/question-dropdown';
import { TextboxQuestion } from '../models/question-textbox';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpService) { }

  getJson(templateName: string) {
    const path = `assets/template-form/${templateName}.json`;
    return this.http.getJson(path);
  }

    getQuestions() {
        const questions: QuestionBase<any>[] = [
            new DropdownQuestion({
              key: 'brave',
              label: 'Bravery Rating',
              options: [
                {key: 'solid',  value: 'Solid'},
                {key: 'great',  value: 'Great'},
                {key: 'good',   value: 'Good'},
                {key: 'unproven', value: 'Unproven'}
              ],
              order: 1
            }),
            new TextboxQuestion({
              key: 'firstName',
              label: 'First name',
              value: '',
              required: true,
              order: 2
            }),
            new TextboxQuestion({
              key: 'emailAddress',
              label: 'Email',
              type: 'email',
              order: 3
            }),
            new TextboxQuestion({
              key: 'password',
              label: 'Password',
              type: 'password',
              order: 4
            }),
            new TextboxQuestion({
              key: 'number',
              label: 'Number',
              type: 'number',
              order: 4
            })
          ];
          return questions.sort((a, b) => a.order - b.order);
    }
}
