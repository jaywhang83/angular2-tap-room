import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Keg: </h3>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg task-form"/>
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg task-form"/>
    <input [(ngModel)]="keg.price" class="col-sm-8 input-lg task-form"/>
    <input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg task-form"/>
  </div>
  `
})

export class EditKegComponent {
  public keg: Keg;
}
