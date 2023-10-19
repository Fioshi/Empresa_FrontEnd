import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from './criar-funcionario/funcionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  constructor(private http: HttpClient) {}

  private API = 'http://localhost:8080/api/funcionario';

  criar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API, funcionario);
  }

  editar(funcionario: Funcionario): Observable<Funcionario>{
    const url = `${this.API}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API);
  }

  buscarPorId(id: number): Observable<Funcionario> {
    const url = `${this.API}/${id}`;
    return this.http.get<Funcionario>(url);
  }
}
