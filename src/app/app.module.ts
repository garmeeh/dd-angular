import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchViewModule } from './search-view/search-view.module';
import { AdViewModule } from './ad-view/ad-view.module';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    SearchViewModule,
    AdViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
