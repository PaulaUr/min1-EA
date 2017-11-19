import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Subjects } from './subject';

@Pipe({
    name: 'searchs'
})

@Injectable()
export class SearchPipeComponent implements PipeTransform {

        transform(items: Subjects[], buscar: string, buscar1: string): any {
            if (buscar === undefined) {
                return items;
            }
            if (buscar) {
                return items.filter(item => item.titulacion === buscar);

            }
            if (buscar1) {
                return items.filter(item => item.cuatrimestre === buscar1);

            }
        }

}