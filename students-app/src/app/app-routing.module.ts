import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent} from './subject/subjects.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/subjects', pathMatch: 'full' },
    { path: 'detail/:name', component: ProductDetailComponent },
    { path: 'subjects', component: SubjectsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}