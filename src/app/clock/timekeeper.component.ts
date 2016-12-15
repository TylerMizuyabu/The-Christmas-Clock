import { EventEmitter, Output, Input, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-time-keeper',
  template: `
              <h3>{{num}}</h3>
            `,
  styles: [`
    h1{
      text-align:center
    }
  `]
})
export class TimeKeeperComponent {

  @Input() num: string;

  constructor(){}

}
