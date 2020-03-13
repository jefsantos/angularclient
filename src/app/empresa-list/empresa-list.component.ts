import { EmpresamodelService } from '../service/empresamodel.service';
import { Component, OnInit } from '@angular/core';
import { Empresamodel } from '../model/Empresamodel';
import { Router } from '@angular/router';



 
@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})

export class EmpresaListComponent implements OnInit {
 
  empresas: Empresamodel[];
 
  constructor(private empresamodelService: EmpresamodelService,  private router: Router) {
  }
 
  ngOnInit() {
    this.empresamodelService.findAll().subscribe(data => {
      this.empresas = data;

    });
  }

  excluir(id: number) {
    this.empresamodelService.excluir(id)
      .subscribe(
        data => {
          console.log(data);

        },
   
        error => console.log(error));

  }

}