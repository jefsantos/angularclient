import { Empresamodel } from './../model/empresamodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


 
@Injectable()
export class EmpresamodelService {
 
  private EmpresamodelUrl: string;
 
  constructor(private router: Router, private http: HttpClient) {
    this.EmpresamodelUrl = 'http://localhost:8092/service/empresa';
  }
 
  public findAll(): Observable<Empresamodel[]> {
    return this.http.get<Empresamodel[]>(this.EmpresamodelUrl);
  }
 
  public save(empresamodel: Empresamodel) {
    return this.http.post<Empresamodel>(this.EmpresamodelUrl, empresamodel);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.EmpresamodelUrl}/${id}`, { responseType: 'text' });
  }

  gotoUserList() {
    this.router.navigate(['/empresas']);
  }

  
}