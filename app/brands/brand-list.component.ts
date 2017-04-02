import { Component, OnInit } from "@angular/core";
import { IBrand } from "./brand";
import { BrandService } from './brand.service'
import { Subscription } from 'rxjs/Subscription';
@Component(
    {
        moduleId: module.id, 
        templateUrl: './brand-list.component.html',
        styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit
{
    pageTitle: string = 'Brand  List '
    listFilter: string ;
    brands: IBrand[];
    errorMessage: string;

    constructor( private brandService : BrandService)
    {   }

    ngOnInit():void
    {
        this.brandService.getBrand()
            .subscribe(brand => this.brands = brand,
            error => this.errorMessage =<any> error);
    }
}