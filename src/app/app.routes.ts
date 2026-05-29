import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listado', component: ListComponent },
  { path: 'pokemon/:id', component: DetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
