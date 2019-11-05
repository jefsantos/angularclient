import { Pessoamodel } from './../model/pessoamodel';
import { PessoamodelService } from '../service/pessoamodel.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

 

@Component({
  selector: 'app-pessoamodel-form',
  templateUrl: './pessoamodel-form.component.html',
  styleUrls: ['./pessoamodel-form.component.css']
})
export class PessoamodelFormComponent  {
 
  pessoamodel: Pessoamodel;
 
  constructor(private route: ActivatedRoute, private router: Router, private pessoamodelService: PessoamodelService) {
    this.pessoamodel = new Pessoamodel();
  }
 
  onSubmit() {
    this.pessoamodelService.save(this.pessoamodel).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/pessoas']);
  }
}