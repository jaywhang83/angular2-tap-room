import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { DecreaseVolumeComponent } from './decrease-volume.component';
import { LowPipe } from './low.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  //outputs:['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, NewKegComponent, EditKegComponent, DecreaseVolumeComponent],
  template:`

  <select (change)="onChange($event.target.value)" class="filter">
	  <option value="all">Show All</option>
	  <option value="low">Show Less than 10 pints left</option>
	</select>

  <keg-display
  *ngFor="#currentKeg of kegList | low: filterLow"
  (click)="kegClicked(currentKeg)"
	[class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg">
  </keg-display>

  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>

  <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
  <decrease-keg *ngIf="selectedKeg" [keg]="selectedKeg"></decrease-keg>
  `
})

export class KegListComponent {

  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  kegClicked(clickedKeg: Keg): void {
    console.log('CHILD', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
    // console.log("this" this.selectedKeg);
  }

  createKeg(keg: Object): void {
    this.kegList.push(
      new Keg(keg["name"], keg["brand"], keg["price"], keg["alcoholContent"], this.kegList.length)
    );
    console.log("kegList", this.kegList);
  }

  onChange(filterOption) {
		this.filterLow = filterOption;
		console.log(this.filterLow);
	}

}
