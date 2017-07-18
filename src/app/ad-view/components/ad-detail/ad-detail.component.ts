// Angualar
import { Component, Input } from '@angular/core';
// Interface
import { Ad } from '../../../models/ad.interface';

@Component({
  selector: 'ad-detail',
  styleUrls: ['ad-detail.component.scss'],
  template: `
    <div class="ad-detail">
      <h1>{{ ad?.header }}</h1>
      <img
          *ngIf="ad?.photos?.length" 
          src="{{ ad.photos[0].small2 }}" />
      <img
        *ngIf="!ad?.photos?.length" 
        src="http://osclasspremium.themehelp.us/bigio/oc-content/themes/bigio/images/no_photo.png" />
      <p *ngIf="ad?.price">Price: €{{ ad?.price }}</p>
      <p *ngIf="ad?.county">County: {{ ad?.county }}</p>
      <p [innerHTML]="ad?.description"></p>
    </div>
  `
})

export class AdDetailComponent {
  @Input()
  ad: Ad;
}