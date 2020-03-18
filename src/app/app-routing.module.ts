import { CarroListComponent } from './carro-list/carro-list.component';


import { UserListComponent } from './pessoa-list/user-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { PasseioListComponent } from './passeio-list/passeio-list.component';
import { PasseiomodelFormComponent } from './passeiomodel-form/passeiomodel-form.component';
import{CarromodelFormComponent} from './carromodel-form/carromodel-form.component'
import { from } from 'rxjs';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresamodelFormComponent } from './model/empresamodel-form/empresamodel-form.component';

 
const routes: Routes = [
  { path: 'pessoas', component: UserListComponent },
  { path: 'passeios', component: PasseioListComponent },
  {path:'carros', component:CarroListComponent},
  {path:'empresas', component:EmpresaListComponent},


  { path: 'addpass', component: PasseiomodelFormComponent},
  { path: 'adduser', component: PessoamodelFormComponent },
  { path: 'addcar', component: CarromodelFormComponent },
  { path: 'addcompany', component: EmpresamodelFormComponent }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }