import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Static page header dumb (representational) component.
 */
@Component({
  selector: 'gig-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }
