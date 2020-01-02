import { CarroListComponent } from './carro-list/carro-list.component';


import { UserListComponent } from './pessoa-list/user-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { PasseioListComponent } from './passeio-list/passeio-list.component';
import { PasseiomodelFormComponent } from './passeiomodel-form/passeiomodel-form.component';
import{CarromodelFormComponent} from './carromodel-form/carromodel-form.component'
import { from } from 'rxjs';

 
const routes: Routes = [
  { path: 'pessoas', component: UserListComponent },
  { path: 'passeios', component: PasseioListComponent },
  {path:'carros', component:CarroListComponent},


  { path: 'addpass', component: PasseiomodelFormComponent},
  { path: 'adduser', component: PessoamodelFormComponent },
  { path: 'addcar', component: CarromodelFormComponent }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }