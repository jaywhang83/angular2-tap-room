import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'decrease-keg',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <button (click)="reduceVolumeByOne(keg)">Reduce By 1</button>
  </div>
  `
})

export class DecreaseVolumeComponent {
  public keg: Keg;

  reduceVolumeByOne(keg: Keg){
    keg.volume--;
  }

}

//[(ngModel)]="keg.volume
