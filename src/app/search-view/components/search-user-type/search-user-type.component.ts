import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-user-type',
  template: `
    <nav class="pure-button-group">  
      <button
        class="pure-button pure-button-primary button-small"
        *ngFor="let user of userTypes"
        [class.pure-button-active]="user === this.userType"
        (click)="filterByUserType(user)">
        {{ user }}
      </button>
    </nav>
  `
})

export class SearchUserTypeComponent {
  userTypes: string[] = [
    'Any',
    'Private',
    'Trader'
  ];

  @Input()
  userType: string;

  @Output()
  userTypeChange: EventEmitter<string> = new EventEmitter<string>();

  filterByUserType(user: string) {
    this.userType = user;
    this.userTypeChange.emit(this.userType);
  }
}