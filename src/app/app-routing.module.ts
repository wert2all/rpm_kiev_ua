import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv/cv-page.component';
import { IndexPageComponent } from './pages/index/index-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'resume', component: CvPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
