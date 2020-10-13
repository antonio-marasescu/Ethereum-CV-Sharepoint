import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SharepointRoutingModule} from './sharepoint-routing.module';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {CvTableComponent} from './components/cv-table/cv-table.component';

@NgModule({
  declarations: [LandingPageComponent, CvTableComponent],
  imports: [SharedModule, SharepointRoutingModule],
  providers: [],
})
export class SharepointModule {
}
