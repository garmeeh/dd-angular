import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdViewService } from '../../ad-view.service';

import 'rxjs/add/operator/switchMap';
// Interfaces
import { Ad } from '../../../models/ad.interface';

@Component({
  selector: 'ad-view',
  template: `
    <div>
    <button
      class="pure-button"
      (click)="goBack();">
      Go Back
    </button>
      <ad-detail
        [ad]="ad">
      </ad-detail>
    </div>
  `
})

export class AdViewComponent implements OnInit {
  ad: Ad;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adViewService: AdViewService
  ) {}

  ngOnInit() {
    this.route
      .params
      .switchMap((data: Ad) => this.adViewService.getAd(data.id))
      .subscribe((data: Ad) => this.ad = data);
  }

  goBack(){
    this.router.navigate(['/']);
  }
}