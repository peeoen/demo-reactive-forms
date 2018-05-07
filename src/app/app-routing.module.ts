import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './components/text/text.component';

const routes: Routes = [
  { path: '', redirectTo: 'text', pathMatch: 'full' },
  { path: 'text', component: TextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    TextComponent
];