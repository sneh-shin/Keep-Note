import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'add-user',
    component: RegistrationFormComponent,
  },
  {
    path: 'add-note',
    component: AddNoteComponent,
  },
  {
    path: 'login',
    component : LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
