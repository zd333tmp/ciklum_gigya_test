import { Component, OnInit } from '@angular/core';

/**
 * Smart container for account options.
 * Is expected to be route destination.
 * Is aware of service layer (store state dealer in our case).
 * Rules data between dumb (representational) components and service (state) layer.
 */
@Component({
  selector: 'gig-account-options-container',
  templateUrl: './account-options-container.component.html',
  styleUrls: ['./account-options-container.component.styl']
})
export class AccountOptionsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
