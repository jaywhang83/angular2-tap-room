import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  //outputs:['onKegSelect'],
  //pipes:
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template:`
  <keg-display
  *ngFor="#currentKeg of kegList"
  (click)="kegClicked(currentKeg)"
	[class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg">
  </keg-display>

  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>

  <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
  `
})

export class KegListComponent {

  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  kegClicked(clickedKeg: Keg): void {
    console.log('CHILD', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }

  createKeg(keg: Object): void {
    this.kegList.push(
      new Keg(keg["name"], keg["brand"], keg["price"], keg["alcoholContent"], this.kegList.length)
    );
    console.log("kegList", this.kegList);
  }
}
