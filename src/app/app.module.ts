import { EmpresamodelService } from 'src/app/service/empresamodel.service';
import { CarroListComponent } from './carro-list/carro-list.component';

import { UserListComponent } from './pessoa-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { PessoamodelService } from './service/pessoamodel.service';


import { PasseiomodelService } from './service/service-passeio/passeiomodel-service.service';





import { CarromodelService } from './service/carromodel.service';
import { CarromodelFormComponent } from './carromodel-form/carromodel-form.component';

import { PasseiomodelFormComponent } from './passeiomodel-form/passeiomodel-form.component';
import { PasseioListComponent } from './passeio-list/passeio-list.component';


import { EmpresamodelFormComponent } from './model/empresamodel-form/empresamodel-form.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';






@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CarroListComponent,
    EmpresaListComponent,

    PessoamodelFormComponent,
    PasseiomodelFormComponent,
    EmpresamodelFormComponent,
    CarromodelFormComponent,    

    PasseioListComponent



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoamodelService, PasseiomodelService, CarromodelService, EmpresamodelService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }