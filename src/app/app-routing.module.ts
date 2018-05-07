import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './components/text/text.component';

const routes: Routes = [
  { path: '', redirectTo: 'text', pathMatch: 'full' },
  { path: 'text', component: TextComponent },
  { path: 'textarea', component: TextareaComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'checkbox', component: CheckboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    TextComponent
];