import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <div>
    <ul>
      <li>{{ keg.name}}-AC{{ keg.alcoholContent}}- {{keg.price}}</li>
    </ul>
  <div>
  `
})

export class KegComponent {
  public keg: Keg;
}
