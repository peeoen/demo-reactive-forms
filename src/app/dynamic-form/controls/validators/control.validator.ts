import { Validators } from '@angular/forms';

export class ControlValidator {
    getValidator(validatorName: string) {
        switch(validatorName.toLowerCase()) {
            case 'email': 
                return Validators.email;
            
            default: break;
        }
    }
}