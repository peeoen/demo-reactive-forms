import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../models/question-dropdown';
import { QuestionBase } from './../models/question-base';
import { TextboxQuestion } from './../models/question-textbox';

@Injectable({
    providedIn: 'root'
})
export class QuestionConvertorService {

    constructor() { }

    getQuestion(json: any[]): QuestionBase<any>[] {
        const questions : QuestionBase<any>[] = [];
        for(let j of json) {
            const ctrl = this.getControl(j);
            if (ctrl) {
                questions.push(ctrl);
            }
        }
        // console.log(questions);
        return questions.sort((a, b) => a.order - b.order);
    }


    getControl(json: any): QuestionBase<any>{
        switch(json.control.toLowerCase()) {
            case 'textbox':
                return new TextboxQuestion({
                    key: json.key,
                    label: json.label,
                    value: json.value,
                    required: json.required,
                    order: json.order,
                    type: json.type
                });
            case 'dropdown':
                return new DropdownQuestion({
                    key: json.key,
                    label: json.label,
                    options: json.options,
                    order: json.order
                  });
            default: return null;
        }
    }
}