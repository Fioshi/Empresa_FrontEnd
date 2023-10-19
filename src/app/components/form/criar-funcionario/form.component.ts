import { Component } from '@angular/core';

import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from './funcionario';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  funcionario: Funcionario = {
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
  };

  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  criarFuncionario() {
    try {
      this.service.criar(this.funcionario).subscribe((Response) => {
        alert('Cadastrado com sucesso!');
        this.router.navigate(['/listaFuncionarios']);
      })
    } catch (e) {
      alert(e);
    }
  }
}
