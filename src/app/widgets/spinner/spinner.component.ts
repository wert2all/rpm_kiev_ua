import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input() color = 'yellow';
}
