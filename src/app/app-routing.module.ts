import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightContentComponent } from './right-content/right-content.component';
import { LoginComponent } from './auth/login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'right-content',
    component: RightContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sidebar',
    component: SideBarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
