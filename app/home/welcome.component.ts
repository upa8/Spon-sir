import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    styleUrls: ['app/home/welcome.component.css', 'app/home/slider.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
