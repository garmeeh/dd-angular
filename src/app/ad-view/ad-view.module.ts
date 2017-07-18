import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// containers
import { AdViewComponent } from './containers/ad-view/ad-view.component';

// components
import { AdDetailComponent } from './components/ad-detail/ad-detail.component';

// services
import { AdViewService } from './ad-view.service';

const routes: Routes = [
  {
    path: 'ad',
    children: [
      {
        path: ':id',
        component: AdViewComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    // containers
    AdViewComponent,
    // components
    AdDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    AdViewService,
  ]
})


export class AdViewModule {}