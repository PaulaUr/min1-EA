import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Subjects } from './subject';


@Injectable()
export class SubjectSearchService {
    subjects: Subjects;
    private productsUrl = 'http://localhost:3000/api/subjects';  // URL to web api

    constructor(private http: Http) {}
    search(term: string): Observable<Subjects[]> {
        const url = `${this.productsUrl}/${term}`;
        console.log(url);
        return this.http
            .get(url)
            .map(response => response.json());
       /* return this.http
            .get(`api/subjects/${term}`)
            .map(response => response.json()); // .map extrae los heroes de la respuesta de datos
    */

    }
}