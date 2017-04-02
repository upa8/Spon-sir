import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { EventListComponent } from './events/event-list.component';
import { EventDetailComponent } from './events/event-detail.component';
import { EventFilterPipe } from './events/event-filter.pipe';
import { BrandListComponent } from './brands/brand-list.component';
import { BrandFilterPipe } from './brands/brand-filter.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'events', component: EventListComponent},
      { path: 'brands',component: BrandListComponent},
      { path: 'event/:id', component: EventDetailComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    EventListComponent,
    EventFilterPipe,
    EventDetailComponent,
    BrandListComponent,
    BrandFilterPipe
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
