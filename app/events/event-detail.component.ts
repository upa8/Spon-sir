import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IEvent } from './events';
import { EventService } from './event.service';

@Component({
    templateUrl: 'app/events/event-detail.component.html',
    styleUrls: ['app/events/event-detail.component.css']
})

export class EventDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'event detail';
    event: IEvent;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _eventService: EventService){

                }

    ngOnInit():void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getEvent(id);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    getEvent(id: number){
        this._eventService.getEvent(id).subscribe(
            event => this.event = event,
            error => this.errorMessage = <any>error);
    }
}