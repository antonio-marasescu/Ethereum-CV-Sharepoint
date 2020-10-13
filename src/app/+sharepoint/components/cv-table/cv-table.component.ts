import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CvModel} from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-table',
  templateUrl: './cv-table.component.html',
  styleUrls: ['./cv-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvTableComponent {
  @Input() cvAddressList: CvModel[];
  displayedColumns: string[] = ['id', 'ipfsAddress', 'owner'];

  trackCvById(index: number, item: CvModel): string {
    return `${item.id}`;
  }
}
