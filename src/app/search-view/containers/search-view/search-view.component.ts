import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchViewService } from '../../search-view.service';

import { Ad, SectionView, AdSummary } from '../../../models/ad.interface';

interface Query {
  start: number,
  section: string,
  max?: number,
  sort?: string,
  source: string | null,
};

@Component({
  selector: 'search-view',
  styleUrls: ['search-view.component.scss'],
  template: `
    <div class="search-header">
        <div>
          <section-selector
            section="cars"
            [sections]="sections"
            (hadnleSectionChange)="changeSection($event);">
          </section-selector>
        </div>
        <div class="search-header__filters">
          <search-user-type
          userType="Any"
          (userTypeChange)="handleUserTypeChange($event);">
        </search-user-type>
        </div>
        <div class="search-header__search-bar">
          <search-bar
            (handleSearchQuery)="termSearch($event);">
          </search-bar>
        </div>
      </div>
    <div class="grid space-top-20">
      <card-detail
          *ngFor="let ad of ads;"
          [ad]="ad"
          (view)="handleView($event)">
        </card-detail>
    </div>
    <button
      class="pure-button pure-button-primary search-view-load-more"
      *ngIf="this.ads?.length"
      (click)="loadMoreAds();">
      Load More
    </button>
  `
})

export class SearchViewComponent implements OnInit {
  ads: Ad[];
  sections: SectionView[];
  section: string;
  query: Query;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchViewService: SearchViewService
  ) {}

  ngOnInit() {
    this.query = {
      start: 0,
      section: 'cars',
      source: null,
    };

    // should probably be done in a resolve
    this.searchViewService
    .getAds(this.query)
    .subscribe((data: Ad[]) => this.ads = data);

    this.searchViewService
    .getSections()
    .subscribe((data: any[]) => this.sections = data);
  }

  handleView(event: AdSummary) {
    this.router.navigate(['ad', event.id]);
  }

  // all the below functions could be refactored into one
  loadMoreAds() {
    const start = this.query.start + 30;
    this.query = Object.assign({}, this.query, { start: start })
    this.searchViewService
    .getAds(this.query)
    .subscribe((data: any[]) => this.ads = [...this.ads, ...data]);
  }

  handleUserTypeChange(userType: string) {
    this.query = Object.assign({}, this.query, { source: userType })
    this.searchViewService
    .getAds(this.query)
    .subscribe((data: any[]) => this.ads = [...data]);
  }

  termSearch(term: string) {
    this.query = Object.assign({}, this.query, { words: term })
    this.searchViewService
    .getAds(this.query)
    .subscribe((data: any[]) => this.ads = [...data]);
  }

  changeSection(section: string) {
    this.query = Object.assign({}, this.query, { section: section })
    this.searchViewService
    .getAds(this.query)
    .subscribe((data: any[]) => this.ads = [...data]);
  }
}