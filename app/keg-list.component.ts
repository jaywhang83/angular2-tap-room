import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  //outputs:['onKegSelect'],
  //pipes:
  directives: [KegComponent, NewKegComponent],
  template:`
  <keg-display
  *ngFor="#currentKeg of kegList"
  [keg]="currentKeg">
  </keg-display>

  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {

  public kegList: Keg[];

  createKeg(keg: Object): void {
    this.kegList.push(
      new Keg(keg["name"], keg["brand"], keg["price"], keg["alcoholContent"], this.kegList.length)
    );
    console.log("kegList", this.kegList);
  }
}
