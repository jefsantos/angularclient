import { CarromodelService } from '../service/carromodel.service';
import { Component, OnInit } from '@angular/core';
import { Carromodel } from '../model/Carromodel';
import { Router } from '@angular/router';



 
@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.css']
})

export class CarroListComponent implements OnInit {
 
  carros: Carromodel[];
 
  constructor(private carromodelService: CarromodelService,  private router: Router) {
  }
 
  ngOnInit() {
    this.carromodelService.findAll().subscribe(data => {
      this.carros = data;

    });
  }

  excluir(id: number) {
    this.carromodelService.excluir(id)
      .subscribe(
        data => {
          console.log(data);

        },
   
        error => console.log(error));

  }

}