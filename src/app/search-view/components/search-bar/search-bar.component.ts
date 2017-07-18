import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  template: `
    <div class="pure-form">
      <input 
        placeholder="Search for ads..."
        type="text"
        #term />
      <button
        class="pure-button pure-button-primary"
        (click)="doSearch(term.value)">
        Search
      </button>
    </div>
  `
})

export class SearchBarComponent {

  @Output()
  handleSearchQuery: EventEmitter<string> = new EventEmitter<string>();

  doSearch(term: string = null) {
    if (!term) return;
    this.handleSearchQuery.emit(term);
  }
}