import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

// defining annotation aka "decorator"
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Keg List</h1>
    <keg-list [kegList]="kegs"></keg-list>
  </div>
  ` //uses backticks
})

export class AppComponent {
 public kegs: Keg[];
 constructor() {
   this.kegs =[
     new Keg("coors light", "coors", 3.00, 0.04, 0),
     new Keg("bud light", "bud", 3.50, 0.045, 1),
     new Keg("corona light", "corona", 4.00, 0.05, 2)
   ];

   console.log(this.kegs);
 }

 //method
 kegWasSelected(clickedKeg: Keg): void {
   console.log('PARENT', clickedKeg);
 }
}
