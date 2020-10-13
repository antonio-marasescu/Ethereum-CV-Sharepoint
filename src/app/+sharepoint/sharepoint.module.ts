import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SharepointRoutingModule} from './sharepoint-routing.module';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {CvTableComponent} from './components/cv-table/cv-table.component';
import {CvFormDialogComponent} from './components/cv-form-dialog/cv-form-dialog.component';

@NgModule({
  declarations: [LandingPageComponent, CvTableComponent, CvFormDialogComponent],
  imports: [SharedModule, SharepointRoutingModule],
  providers: [],
})
export class SharepointModule {
}
