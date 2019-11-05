import { UserListComponent } from './pessoa-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { PasseiomodelService } from './service/service-passeio/passeiomodel-service.service';
import { PasseioListComponent } from './passeio-list/passeio-list.component';
 
const routes: Routes = [
  { path: 'pessoas', component: UserListComponent },
  { path: 'passeios', component: PasseioListComponent },
  { path: 'adduser', component: PessoamodelFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }