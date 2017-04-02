import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IEvent } from './events';

@Injectable()
export class EventService{

    private _eventsUrl = 'api/events/events.json'; 
    constructor(private _http : Http){

    }

    getEvents(): Observable<IEvent[]>{
        return this._http.get(this._eventsUrl)
            .map((response: Response) => <IEvent[]> response.json())
            .do(data => console.log('All: '+ JSON.stringify(data)))
            .catch(this.handleError);
    }

    getEvent(id: number): Observable<IEvent>{
        return this.getEvents()
            .map((events: IEvent[]) => events.find(p => p.eventNumber ===  id));
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}