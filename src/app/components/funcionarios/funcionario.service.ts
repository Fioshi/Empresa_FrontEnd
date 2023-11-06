import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Funcionario } from './funcionario';
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

  editar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(this.API, funcionario);
  }

  listar(pagina: number, filtro: string): Observable<Funcionario[]> {
    let params = new HttpParams().set('page', pagina);

    if (filtro.trim().length > 2) {
      let params = new HttpParams().set('keyword', filtro);
      let url = `${this.API}/busca`;
      return this.http.get<Funcionario[]>(url, { params });
    }
    return this.http.get<Funcionario[]>(this.API, { params });
  }

  listarTudo(){
    const url = `${this.API}/busca/all`
    return this.http.get<Funcionario[]>(url);
  }

  // buscarPorCpf(pagina: number, cpf: string){
  //   const url = `${this.API}/busca?page=${pagina}`
  //   let params = new HttpParams().set("keyword", cpf);
  //   return this.http.get<Funcionario[]>(url , { params })
  // }

  buscarPorId(id: number): Observable<Funcionario> {
    const url = `${this.API}/${id}`;
    return this.http.get<Funcionario>(url);
  }

  excluir(id: number): Observable<Funcionario> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Funcionario>(url);
  }
}
