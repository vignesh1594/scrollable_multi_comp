import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components


// Auth
// import { AuthGuard } from './core/auth';
import { RedirectGuard } from './core/guards/redirect.guard';
import { ReverseAuthGuard } from './core/guards/reverse-auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [ReverseAuthGuard]
  },
  {
    path: '',
    children: [
      { path: '', redirectTo: '', pathMatch: 'full', canActivate: [RedirectGuard] },
      { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [RedirectGuard] }
    ]
  },
	// { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
