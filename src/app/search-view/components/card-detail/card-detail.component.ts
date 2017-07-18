import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AdSummary } from '../../../models/ad.interface';

@Component({
  selector: 'card-detail',
  styleUrls: ['card-detail.component.scss'],
  template: `
    <div class="card">
      <a
        class="card__link" 
        (click)="goToAd()">
        <img
          *ngIf="ad.photos?.length" 
          src="{{ ad.photos[0].small2 }}" />
        <img
          *ngIf="!ad.photos?.length" 
          src="http://osclasspremium.themehelp.us/bigio/oc-content/themes/bigio/images/no_photo.png" />
        <div class="card__body">
          <h3 class="card__title">{{ ad.header }}</h3>
          <ul class="card__info">
            <li>{{ ad.price }}</li>
            <li>{{ ad.county }}</li>
          </ul>
        </div>
      </a>
    </div>
  `
})

export class CardDetailComponent {
  @Input()
  ad: AdSummary;

  @Output()
  view: EventEmitter<AdSummary> = new EventEmitter<AdSummary>();

  goToAd() {
    this.view.emit(this.ad);
  }
}