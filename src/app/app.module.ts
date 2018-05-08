import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextComponent } from './components/text/text.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ControlRadioComponent } from './dynamic-form/controls/control-radio/control-radio.component';
import { DropdownComponent } from './dynamic-form/controls/dropdown/dropdown.component';
import { TextboxComponent } from './dynamic-form/controls/textbox/textbox.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MainNavComponent } from './main-nav/main-nav.component';


const materials = [
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  LayoutModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TextComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    TextboxComponent,
    ControlRadioComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materials,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
