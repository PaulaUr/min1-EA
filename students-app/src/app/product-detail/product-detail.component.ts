import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from '../student';
import { Subjects } from '../subject';
import { SubjectService } from '../subject.service';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
    subject: Subjects;

    constructor(
        private subjectService: SubjectService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.paramMap.
        switchMap((params: ParamMap ) => this.subjectService.getProduct(params.get('name'))).subscribe(product => this.subject = product);
    }
    goBack(): void {
        this.location.back();
    }
    save(p: Subjects): void {
      //  console.log(p);
        this.subjectService.update(p)
        .then(() => this.goBack());
    }
}