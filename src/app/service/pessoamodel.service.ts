import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Pessoamodel } from '../model/pessoamodel';




 
@Injectable()
export class PessoamodelService {
 
  private PessoamodelUrl: string;
 
  constructor(private http: HttpClient) {
    this.PessoamodelUrl = 'http://localhost:8090/service/pessoa';
  }
 
  public findAll(): Observable<Pessoamodel[]> {
    return this.http.get<Pessoamodel[]>(this.PessoamodelUrl);
  }
 
  public save(pessoamodel: Pessoamodel) {
    return this.http.post<Pessoamodel>(this.PessoamodelUrl, pessoamodel);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.PessoamodelUrl}/${id}`, { responseType: 'text' });
  }



  
}