import {  PipeTransform, Pipe } from '@angular/core';
import { IBrand } from './brand';

@Pipe({
    name: 'brandFliter'
})
export class BrandFilterPipe implements PipeTransform {

    transform(value: IBrand[], filterBy: string): IBrand[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((brand: IBrand) =>
            brand.brandName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
