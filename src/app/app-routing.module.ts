import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextComponent } from './components/text/text.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'text', pathMatch: 'full' },
  { path: 'text', component: TextComponent },
  { path: 'textarea', component: TextareaComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    TextComponent
];