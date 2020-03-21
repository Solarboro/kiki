import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TripModule } from './trip/trip.module';
import { MemberModule } from './member/member.module';
import { FaModule } from './fa/fa.module';
import { F0fModule } from './f0f/f0f.module';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    TripModule,
    MemberModule,
    FaModule,
    F0fModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
