import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlanComponent } from './alan/alan.component';
import { AsusComponent } from './asus/asus.component';


@NgModule({
  // we register new components in the declarations property
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlanComponent,
    AsusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// A Module's purpose --> Tell angular which features / Components my app uses
