import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// containers
import { SearchViewComponent } from './containers/search-view/search-view.component';

// components
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { SearchUserTypeComponent } from './components/search-user-type/search-user-type.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SectionSelectorComponent } from './components/section-selector/section-selector.component';

// services
import { SearchViewService } from './search-view.service';

const routes: Routes = [
  {
    path: 'search',
    children: [
      {
        path: '',
        component: SearchViewComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    // containers
    SearchViewComponent,
    // components
    CardDetailComponent,
    SearchUserTypeComponent,
    SearchBarComponent,
    SectionSelectorComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    SearchViewService,
  ]
})


export class SearchViewModule {}