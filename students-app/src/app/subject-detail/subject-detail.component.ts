import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Subjects } from '../subject';
import { SubjectService } from '../subject.service';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'subject-detail',
    templateUrl: './subject-detail.component.html',
})

export class SubjectDetailComponent implements OnInit {
    subject: Subjects;

    constructor(private subjectService: SubjectService,
                private route: ActivatedRoute,
                private location: Location,
              ) {}

    ngOnInit(): void {
        console.log('subjects-detail.component cargado !');
        this.route.paramMap.switchMap((params: ParamMap) => this.subjectService.getProduct(params.get('name')))
            .subscribe(subject => this.subject = subject);
    }

    goBack(): void {
        this.location.back();
    }

     save(p: Subjects): void {
         console.log(p);
         this.subjectService.update(p)
             .then(() => this.goBack());
     }

}