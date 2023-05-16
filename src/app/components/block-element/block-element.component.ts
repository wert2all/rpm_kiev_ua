import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-block-element',
  templateUrl: './block-element.component.html',
  styleUrls: ['./block-element.component.scss'],
})
export class BlockElementComponent {
  @Input() title = '';
}
