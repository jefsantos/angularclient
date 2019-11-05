import { PasseiomodelService } from './../service/service-passeio/passeiomodel-service.service';
import { Component, OnInit } from '@angular/core';
import { Passeiomodel } from './../model/Passeiomodel';
import { Router } from '@angular/router';



 
@Component({
  selector: 'app-passeio-list',
  templateUrl: './passeio-list.component.html',
  styleUrls: ['./passeio-list.component.css']
})

export class PasseioListComponent implements OnInit {
 
  passeios: Passeiomodel[];
 
  constructor(private passeiomodelService: PasseiomodelService,  private router: Router) {
  }
 
  ngOnInit() {
    this.passeiomodelService.findAll().subscribe(data => {
      this.passeios = data;

    });
  }

  excluir(id: number) {
    this.passeiomodelService.excluir(id)
      .subscribe(
        data => {
          console.log(data);

        },
   
        error => console.log(error));

  }

}