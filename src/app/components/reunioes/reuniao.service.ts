import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reuniao } from './reuniao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReuniaoService {

  private API = "http://localhost:8080/api/reuniao";

  criar(reuniao: Reuniao): Observable<Reuniao> {
    return this.http.post<Reuniao>(this.API, reuniao);
  }

  listar(): Observable<Reuniao[]> {
    return this.http.get<Reuniao[]>(this.API);
  }

  constructor(
    private http : HttpClient
  ) { }


}
