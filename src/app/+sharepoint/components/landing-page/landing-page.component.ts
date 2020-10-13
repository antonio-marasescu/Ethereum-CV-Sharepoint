import {Component, OnInit} from '@angular/core';
import {SharepointCvService} from '../../core/services/sharepoint-cv.service';
import {Observable} from 'rxjs';
import {CvModel} from '../../core/models/cv.model';
import {MatDialog} from '@angular/material/dialog';
import {CvFormDialogComponent} from '../cv-form-dialog/cv-form-dialog.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  addressList$: Observable<CvModel[]>;

  constructor(public matDialog: MatDialog, private sharepointCvService: SharepointCvService) {
  }

  ngOnInit(): void {
    this.sharepointCvService.getCvModelList();
    this.addressList$ = this.sharepointCvService.cvListDataChanged.asObservable();
    this.addressList$.subscribe();
  }

  addNewCv(): void {
    this.matDialog.open(CvFormDialogComponent, {
      height: '300px',
      width: '400px'
    });
  }
}
