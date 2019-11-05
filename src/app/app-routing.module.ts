import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './lista/user-list/user-list.component';
import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
 
const routes: Routes = [
  { path: 'pessoas', component: UserListComponent },
  { path: 'adduser', component: PessoamodelFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }