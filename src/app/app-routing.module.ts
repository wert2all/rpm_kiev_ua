import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv/cv-page.component';
import { IndexPageComponent } from './pages/index/index-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy/privacy-policy-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'privacypolicy.htm', component: PrivacyPolicyPageComponent },
  { path: 'resume', component: CvPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
