import { Component } from '@angular/core';

// This is a decorator. They are always added by adding @ infront of thems
@Component({
    // Each of the below are called "properties"
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    p {
        color: darkBlue;
    }
    `]
}) 

// we export so other modules can use it if they want to {
export class ServerComponent {

}
