import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { UserListComponent } from './lista/user-list/user-list.component';
import { PessoamodelFormComponent } from './pessoamodel-form/pessoamodel-form.component';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PessoamodelService } from './service/pessoamodel.service';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PessoamodelFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoamodelService],
  bootstrap: [AppComponent]
})
export class AppModule { }