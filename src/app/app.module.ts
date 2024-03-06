import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeriodicaComponent } from './pages/tabla-periodica/tabla-periodica.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaPeriodicaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
