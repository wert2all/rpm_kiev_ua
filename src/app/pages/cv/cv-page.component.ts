import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './cv-page.component.html',
})
export class CvPageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Резюме');
  }
}
