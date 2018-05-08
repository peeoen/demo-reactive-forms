import { QuestionBase, Question } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(public options: TextboxQuestionModel = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}


export interface TextboxQuestionModel extends Question {
    type?: string;
}
