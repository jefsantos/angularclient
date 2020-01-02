import { CarroListComponent } from './carro-list/carro-list.component';

import { UserListComponent } from './pessoa-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PessoamodelService } from './service/pessoamodel.service';

import { CarromodelService } from './service/carromodel.service';

import { PasseiomodelFormComponent } from './passeiomodel-form/passeiomodel-form.component';
import { CarromodelFormComponent } from './carromodel-form/carromodel-form.component';
import { PasseioListComponent } from './passeio-list/passeio-list.component';
import { PasseiomodelService } from './service/service-passeio/passeiomodel-service.service';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CarroListComponent,
    PessoamodelFormComponent,
    PasseiomodelFormComponent,
    CarromodelFormComponent,
    PasseioListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoamodelService, PasseiomodelService, CarromodelService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }