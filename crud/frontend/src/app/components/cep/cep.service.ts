import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from './cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  baseUrl = "http://localhost:3001/ceps"

  constructor(private http: HttpClient) { }

  read(): Observable<Cep[]> {
    return this.http.get<Cep[]>(this.baseUrl)
  }

  getCep(cep: string): Observable<Cep> {
    const url = `${this.baseUrl}/${cep}`;
    return this.http.get<Cep>(url);
  }

  /* GET ceps whose cep contains search term */
  searchCeps(term: string): Observable<Cep[]> {
    return this.http.get<Cep[]>(`${this.baseUrl}/?cep=${term}`);
  }
}

