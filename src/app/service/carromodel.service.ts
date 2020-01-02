import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Carromodel } from '../model/carromodel';




 
@Injectable()
export class CarromodelService {
 
  private CarromodelUrl: string;
 
  constructor(private http: HttpClient) {
    this.CarromodelUrl = 'http://localhost:8092/service/carro';
  }
 
  public findAll(): Observable<Carromodel[]> {
    return this.http.get<Carromodel[]>(this.CarromodelUrl);
  }
 
  public save(carromodel: Carromodel) {
    return this.http.post<Carromodel>(this.CarromodelUrl, carromodel);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.CarromodelUrl}/${id}`, { responseType: 'text' });
  }



  
}