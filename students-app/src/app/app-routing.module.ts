import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent} from './subject/subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/subjects', pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent},
    { path: 'detail/:name', component: SubjectDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}