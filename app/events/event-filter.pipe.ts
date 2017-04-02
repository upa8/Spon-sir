import {  PipeTransform, Pipe } from '@angular/core';
import { IEvent } from './events';

@Pipe({
    name: 'eventFliter'
})
export class EventFilterPipe implements PipeTransform {

    transform(value: IEvent[], filterBy: string): IEvent[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((event: IEvent) =>
            event.eventName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
