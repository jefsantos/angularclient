import { UserListComponent } from './pessoa-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { PasseioListComponent } from './passeio-list/passeio-list.component';
import { PasseiomodelFormComponent } from './passeiomodel-form/passeiomodel-form.component';
 
const routes: Routes = [
  { path: 'pessoas', component: UserListComponent },
  { path: 'passeios', component: PasseioListComponent },
  { path: 'addpass', component: PasseiomodelFormComponent},
  { path: 'adduser', component: PessoamodelFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }