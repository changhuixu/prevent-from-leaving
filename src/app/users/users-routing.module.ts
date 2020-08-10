import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { PreventLeavingGuard } from '../guards/prevent-leaving.guard';

const routes: Routes = [
  { path: '', component: UsersComponent, canDeactivate: [PreventLeavingGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
