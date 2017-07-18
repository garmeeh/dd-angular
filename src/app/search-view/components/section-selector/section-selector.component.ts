import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SectionView } from '../../../models/ad.interface';

@Component({
  selector: 'section-selector',
  template: `
    <div class="pure-form">
      <select
          (change)="sectionChanged($event.target.value);">
          <option
            *ngFor="let section of sections"
            [value]="section.name"
            [selected]="section.name === section">
            {{ section.display }}
          </option>
        </select>
    </div>
  `
})

export class SectionSelectorComponent {
  @Input()
  sections: SectionView[]

  @Input()
  section: string

  @Output()
  hadnleSectionChange: EventEmitter<string> = new EventEmitter<string>();

  sectionChanged(section: any = null) {
    if (!section) return;
    this.hadnleSectionChange.emit(section);
  }
}