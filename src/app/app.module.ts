import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index/index-page.component';
import { BlockElementComponent } from './components/block-element/block-element.component';
import { Environment } from './types/environment';
import { environment } from 'src/environments/environment';

export const ENV = new InjectionToken<Environment>('env');

@NgModule({
  declarations: [AppComponent, IndexPageComponent, BlockElementComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: ENV, useFactory: () => environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
