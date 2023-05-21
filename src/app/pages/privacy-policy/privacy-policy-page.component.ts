import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cv-privacy-policy',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss'],
})
export class PrivacyPolicyPageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Privacy Policy');
  }
}
