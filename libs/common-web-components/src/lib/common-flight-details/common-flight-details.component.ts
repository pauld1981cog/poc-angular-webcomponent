import { Component, Input } from '@angular/core';
import { CommonFlightDetailsModel } from './models/common-flight-details-model';

@Component({
  selector: 'common-flight-details',
  templateUrl: './common-flight-details.component.html',
  styleUrls: ['./common-flight-details.component.scss'],
})
export class CommonFlightDetailsComponent {
  @Input() flight: CommonFlightDetailsModel = new CommonFlightDetailsModel();
  @Input() pageNameKey: string = '';
}
