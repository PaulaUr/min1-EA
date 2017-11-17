import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subjects } from '../subject';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';
import {SubjectSearchService} from '../subject-search.service';



@Component({
    selector: 'subject-search',
    templateUrl: './subject-search.component.html',
    providers: [SubjectSearchService]
})

export class SubjectSearchComponent implements OnInit {
    subject: Observable<Subjects[]>;
    private searchTerms = new Subject<string>(); // Subject es un productor de un flujo de eventos Observables

    constructor(
        private subjectSearchService: SubjectSearchService,
        private router: Router) {}


    // Push a search term into the observable stream.
    search(term: string): void {
        // cada llamada a search() pone un nuevo String en este flujo Seubject observable llamando a next()
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.subject = this.searchTerms
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.subjectSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Subjects[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Subjects[]>([]);
            });
    }
    gotoDetail(subject: Subjects): void {
        let link = ['/detail', subject.name];
        this.router.navigate(link);
    }
}