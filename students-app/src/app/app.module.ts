import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {SubjectService} from './subject.service';
import { SubjectsComponent } from './subject/subjects.component';
import { SubjectSearchComponent} from './subject-search/subject-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AppRoutingModule,
      ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
      ProductDetailComponent,
      SubjectsComponent,
      SubjectSearchComponent
  ],
    providers: [ SubjectService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
