import {Component, OnInit} from '@angular/core';
import {SharepointCvService} from '../../core/services/sharepoint-cv.service';
import {Observable} from 'rxjs';
import {CvModel} from '../../core/models/cv.model';
import {MatDialog} from '@angular/material/dialog';
import {CvFormDialogComponent} from '../cv-form-dialog/cv-form-dialog.component';
import {IpfsService} from '../../../shared/services/ipfs.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  addressList$: Observable<CvModel[]>;

  constructor(public matDialog: MatDialog, private sharepointCvService: SharepointCvService, private ipfsService: IpfsService) {
  }

  ngOnInit(): void {
    this.sharepointCvService.getCvModelList();
    this.addressList$ = this.sharepointCvService.cvListDataChanged.asObservable();
    this.addressList$.subscribe();
  }

  addNewCv(): void {
    this.matDialog.open(CvFormDialogComponent, {
      height: '400px',
      width: '400px'
    });
  }

  getFile(ipfsAddress: string): void {
    // TODO: save details regarding file (extension, filename) unto the blockchain, for now 'support' only pdf :)
    this.ipfsService.getFile(ipfsAddress).subscribe(blob => saveAs(blob, 'ipfs_file.pdf'));
  }
}
