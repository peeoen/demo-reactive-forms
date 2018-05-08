import { Question, QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: DropdownQuestionModel = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}

export interface DropdownQuestionModel extends Question {
    options?: any[];
}
