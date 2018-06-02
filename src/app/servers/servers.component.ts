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
  allowNewServer : boolean = false;
  serverCreationStatus : string = 'No server was created';
  serverName : any = 'Initial Server';
  serverCreated : boolean = false
  servers = ['TestServer1', "TestServer2"];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }
  
  onCreateServer() {
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  deleteServer() {
    this.serverCreationStatus = '';
    this.serverCreated = false;
  }

  // event of type any
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
