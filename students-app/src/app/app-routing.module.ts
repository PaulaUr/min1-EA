import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent} from './subject/subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import {SubjectSearchComponent} from './subject-search/subject-search.component';

const routes: Routes = [
    { path: '', redirectTo: '/subjects', pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent},
    { path: 'detail/:name', component: SubjectDetailComponent },
    { path: 'search', component: SubjectSearchComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}