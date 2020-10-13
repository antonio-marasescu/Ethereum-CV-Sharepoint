import {Component, OnInit} from '@angular/core';
import {SharepointCvService} from '../../core/services/sharepoint-cv.service';
import {Observable} from 'rxjs';
import {CvModel} from '../../core/models/cv.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  addressList$: Observable<CvModel[]>;

  constructor(private sharepointCvService: SharepointCvService) {
  }

  ngOnInit(): void {
    this.sharepointCvService.getCvModelList();
    this.addressList$ = this.sharepointCvService.cvListDataChanged.asObservable();
  }

  addNewCv(address: string): void {
    this.sharepointCvService.addCv(address).subscribe();
  }
}
