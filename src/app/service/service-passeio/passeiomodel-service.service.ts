import { Passeiomodel } from './../../model/passeiomodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


 
@Injectable()
export class PasseiomodelService {
 
  private PasseiomodelUrl: string;
 
  constructor(private http: HttpClient) {
    this.PasseiomodelUrl = 'http://localhost:8092/service/passeio';
  }
 
  public findAll(): Observable<Passeiomodel[]> {
    return this.http.get<Passeiomodel[]>(this.PasseiomodelUrl);
  }
 
  public save(passeiomodel: Passeiomodel) {
    return this.http.post<Passeiomodel>(this.PasseiomodelUrl, passeiomodel);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.PasseiomodelUrl}/${id}`, { responseType: 'text' });
  }



  
}