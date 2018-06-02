import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    // styleUrls: ['./app.component.css']
  })

export class UsersComponent {
    username : string = "No username entered";

    setUsernameToEmpty() {
        this.username = "";
    }

    emptyUsername(){
        if (this.username == ""){
            return true;
        }
        else{
            return false;
        }
    }
}