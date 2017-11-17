import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Student } from './student';
import { Subjects} from './subject';


@Injectable()
export class SubjectService {
    private productsUrl = 'http://localhost:3000/api/subjects';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    selectNom: Subjects;

   constructor(private http: Http) {
   }

    getProducts(): Observable<Subjects[]> {
        return  this.http
            .get(this.productsUrl)
            .map(response => response.json());
            // Con el operador .map del Observable transformamos la respuesta http a una matriz de objetos(Products[])

    }
    getProduct(name: string): Observable<Subjects> {
        const url = `${this.productsUrl}/${name}`;
        console.log(url)
        return this.http
            .get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }
   /* create(products: Products): Observable<Products> {
       console.log(products);
        return this.http
            .post(this.productsUrl, JSON.stringify(products), {headers: this.headers})
            .map(response => response.json().data as Products[])
            .catch(this.handleError);
        /*.map(response => {
            if (response.status === 200) {
                console.log('Created !');
            }
            console.log('Not Created');
        })
     }*/
     update(product: Subjects): Promise<Subjects[]> {
        console.log(product);
        console.log(product.name);
         const url = `${this.productsUrl}/${product.name}`;
         console.log(url);
         return this.http
             .put(url, JSON.stringify(product), {headers: this.headers})
             .toPromise()
             .then(() => product)
             .catch(this.handleError);

     }

    private handleError(error: any): Promise<any> { // errores del http
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
