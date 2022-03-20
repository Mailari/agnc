import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about.page';
import { NotFoundComponent } from './pages/not.found.page';
import { ServicesModule } from './pages/services.page';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services.page').then((m) => m.ServicesModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
