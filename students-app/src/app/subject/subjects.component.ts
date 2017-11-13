import {Component, OnInit} from '@angular/core';
import { Student} from '../student';
import { Subjects} from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
    selector: 'my-products',
    templateUrl: './subjects.component.html',
})
export class SubjectsComponent implements OnInit {
    subjects: Subjects[];
    selectedProduct: Subjects;
     prodForm: FormGroup ;
//    canShow$ = new BehaviorSubject(false);
   // category = ['Computers', 'Phones', 'Accesories'];
    constructor(private router: Router,
                private subjectService: SubjectService,
                private fb: FormBuilder) {
        this.createForm();
    }
    onSelect(subjects: Subjects): void {
        this.selectedProduct = subjects;
    }
    getProducts() {
        this.subjectService.getProducts()
            .subscribe( resApi => {
               // console.log('Products from API:', resApi );
               this.subjects = resApi;
                console.log(this.subjects);
            });
        // Pasamos la función de Callback como un argumento al metodo then() de la Promise
    }
    ngOnInit(): void {
        this.getProducts();
    //    console.log(this.products);
    }
    gotoDetail(): void {
        this.router.navigate(['./detail', this.selectedProduct.name]);
        console.log(this.selectedProduct.name);
    }
    createForm() {
        // this.canShow$.next(true)
        // using the form builder =>productFB
        this.prodForm = this.fb.group({
        name : ['', Validators.required ],
        email: '',
        subject: ['', Validators.required]
    });
    }
   /* onSubmit() {
        this.subjectService.create(this.prodForm.value).subscribe();
        }
       /* this.productService.create(model)
            .subscribe( Api => {
            this.formProds.valueChanges.subscribe(form => {
                sessionStorage.setItem('form', JSON.stringify(form));
                console.log(form);

            });
            });
        console.log(model);*/
}
