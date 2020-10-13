import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {SharepointCvService} from '../../core/services/sharepoint-cv.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cv-smart-form',
  templateUrl: './cv-form-dialog.component.html',
  styleUrls: ['./cv-form-dialog.component.scss']
})
export class CvFormDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<CvFormDialogComponent>, private sharepointCvService: SharepointCvService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      file: new FormControl(null, [Validators.required])
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  addCv() {
    const file = this.formGroup.get('file').value;
    this.sharepointCvService.addCv(file);
    this.dialogRef.close();
  }
}
