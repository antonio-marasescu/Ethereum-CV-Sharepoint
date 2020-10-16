import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CvModel} from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-table',
  templateUrl: './cv-table.component.html',
  styleUrls: ['./cv-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvTableComponent {
  @Input() cvAddressList: CvModel[];
  @Output() getFile: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = ['id', 'ipfsAddress', 'owner'];
  extendedDisplayedColumns: string[] = [...this.displayedColumns, 'getFile'];

  trackCvById(index: number, item: CvModel): string {
    return `${item.id}`;
  }
}
