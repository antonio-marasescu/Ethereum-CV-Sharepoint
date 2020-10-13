import {Component, Input} from '@angular/core';
import {CvModel} from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-table',
  templateUrl: './cv-table.component.html',
  styleUrls: ['./cv-table.component.scss']
})
export class CvTableComponent {
  @Input() cvAddressList: CvModel[];
}
