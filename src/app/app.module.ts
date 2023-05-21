import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvPageComponent } from './pages/cv/cv-page.component';
import { BlockElementComponent } from './components/block-element/block-element.component';
import { Environment } from './common/environment';
import { environment } from 'src/environments/environment';
import { GitlabCommitsComponent } from './widgets/gitlab-commits/gitlab-commits.component';
import { GravatarModule } from 'ngx-gravatar';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { IndexPageComponent } from './pages/index/index-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy/privacy-policy-page.component';

export const ENV = new InjectionToken<Environment>('env');

@NgModule({
  declarations: [
    AppComponent,
    CvPageComponent,
    BlockElementComponent,
    GitlabCommitsComponent,
    SpinnerComponent,
    IndexPageComponent,
    PrivacyPolicyPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GravatarModule, HttpClientModule],
  providers: [
    HttpClientModule,
    { provide: ENV, useFactory: () => environment },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
