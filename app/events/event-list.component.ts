import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { IEvent } from './events';
import { EventService } from './event.service';

@Component({
    moduleId: module.id,
    templateUrl: 'event-list.component.html',
    styleUrls:['event-list.component.css']
})

export class EventListComponent implements OnInit{
    pageTitle: string = 'Events';
    listFilter: string;
    events: IEvent[];
    errorMessage: string;
    constructor(private _eventService: EventService){

    }

    ngOnInit(): void{
        this._eventService.getEvents()
                .subscribe(events => this.events = events,
                    error => this.errorMessage = <any>error);
    }
 
}