import { Component } from '@angular/core';

import { EventService } from './events/event.service';
import { BrandService } from "./brands/brand.service";

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    providers: [ EventService , BrandService ]
})
export class AppComponent { }
