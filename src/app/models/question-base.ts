export class QuestionBase<T> {
    value: any;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    options: any;
    constructor(options: Question = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.options = options.options;
    }
}

export interface Question {
    value?: any;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    options?: any;
}