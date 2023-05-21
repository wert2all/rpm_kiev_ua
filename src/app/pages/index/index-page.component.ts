import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cv-index',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('rpm.kiev.ua');
  }
}
