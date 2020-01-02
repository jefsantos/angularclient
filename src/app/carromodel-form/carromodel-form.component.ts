import { Carromodel } from '../model/carromodel';
import { CarromodelService } from '../service/carromodel.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

 

@Component({
  selector: 'app-carromodel-form',
  templateUrl: './carromodel-form.component.html',
  styleUrls: ['./carromodel-form.component.css']
})
export class CarromodelFormComponent  {
 
  carromodel: Carromodel;
 
  constructor(private route: ActivatedRoute, private router: Router, private carromodelService: CarromodelService) {
    this.carromodel = new Carromodel();
  }
 
  onSubmit() {
    this.carromodelService.save(this.carromodel).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/carros']);
  }
}