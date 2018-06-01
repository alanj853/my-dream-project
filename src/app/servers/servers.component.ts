import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: 
  // `
  // <app-server></app-server>
  // <app-server></app-server>
  
  // `,
  templateUrl: './servers.component.html', // have to have the property at all times. Either this or template
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
