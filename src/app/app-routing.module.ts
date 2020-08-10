import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { PreventLeavingGuard } from './guards/prevent-leaving.guard';

const routes: Routes = [
  {
    path: '',
    component: MyFormComponent,
    pathMatch: 'full',
    canDeactivate: [PreventLeavingGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
