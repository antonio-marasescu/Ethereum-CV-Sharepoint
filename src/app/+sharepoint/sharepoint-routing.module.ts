import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharepointRoutingPaths} from './sharepoint-routing-paths';
import {LandingPageComponent} from './components/landing-page/landing-page.component';


const routes: Routes = [
  {path: '', redirectTo: SharepointRoutingPaths.LandingPage, pathMatch: 'full'},
  {
    path: SharepointRoutingPaths.LandingPage,
    component: LandingPageComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharepointRoutingModule {
}
