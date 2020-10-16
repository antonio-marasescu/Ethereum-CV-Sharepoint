import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {SharepointCvService} from '../../core/services/sharepoint-cv.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {IpfsService} from '../../../shared/services/ipfs.service';

@Component({
  selector: 'app-cv-smart-form',
  templateUrl: './cv-form-dialog.component.html',
  styleUrls: ['./cv-form-dialog.component.scss']
})
export class CvFormDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CvFormDialogComponent>,
    private sharepointCvService: SharepointCvService,
    private ipfsService: IpfsService) {
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
    this.ipfsService.addFile(file).subscribe(hash => {
      this.sharepointCvService.addCv(hash);
      this.dialogRef.close();
    });
  }

  onFileAdded(files: NgxFileDropEntry[]): void {
    if (this.formGroup.get('file').value === null) {
      files.filter(f => f.fileEntry.isFile)
        .forEach(f => (f.fileEntry as FileSystemFileEntry)
          .file((actualFile: File) => {
            this.formGroup.patchValue({file: actualFile});
          })
        );
    }
  }
}
