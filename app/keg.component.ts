import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <div>
    <ul>
      <li>{{ keg.name}}-AC{{ keg.alcoholContent | percent:'.2'}}- {{keg.price | currency:"USD":true:"1.2-4"}}- {{keg.volume}}</li>
    </ul>
  <div>
  `
})

export class KegComponent {
  public keg: Keg;
}
