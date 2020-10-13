import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppRoutePaths} from './app-route-paths';


const routes: Routes = [
  {path: '', redirectTo: AppRoutePaths.Sharepoint, pathMatch: 'full'},
  {
    path: AppRoutePaths.Sharepoint,
    loadChildren: () => import('./+sharepoint/sharepoint.module').then(m => m.SharepointModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: AppRoutePaths.Sharepoint
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
