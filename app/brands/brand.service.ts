import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http,Response } from '@angular/http'
import { IBrand } from "./brand";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class BrandService
{
    private brandUrl='api/brands/brands.json';
    
    constructor( private http: Http)
    {   }
    getBrand() : Observable <IBrand[]>
    {
        return this.http.get(this.brandUrl).
                map((response: Response) => <IBrand[]>response.json())
                .catch(this.handleError);
    }
    
    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}