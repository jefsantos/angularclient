import { Pessoamodel } from './../model/pessoamodel';
import { PessoamodelService } from './../service/pessoamodel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {
 
  pessoas: Pessoamodel[];
 
  constructor(private pessoamodelService: PessoamodelService,  private router: Router) {
  }
 
  ngOnInit() {
    this.pessoamodelService.findAll().subscribe(data => {
      this.pessoas = data;

    });
  }

  excluir(id: number) {
    this.pessoamodelService.excluir(id)
      .subscribe(
        data => {
          console.log(data);

        },
   
        error => console.log(error));

  }

  gotoUserList() {
    this.router.navigate(['/pessoas']);
  }

}