import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  buttonClicks = [];
  display : boolean = true;
  count : number = 1;

  constructor() { }

  ngOnInit() {
  }

  toggleP() {
    this.buttonClicks.push(this.count);
    this.count++;
    if (this.display === true) {
      this.display = false
    }
    else {
      this.display = true
    }
  }

}
