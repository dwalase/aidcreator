import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WiGeneratorComponent } from './wi-generator/wi-generator.component';
import { WiAttributeComponent } from './wi-attribute/wi-attribute.component';
import { FormsModule } from '@angular/forms';
import { WiGeneratorOutputComponent } from './wi-generator-output/wi-generator-output.component';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    WiGeneratorComponent,
    WiAttributeComponent,
    WiGeneratorOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
