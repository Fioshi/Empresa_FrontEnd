import { Component } from '@angular/core';

import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from './funcionario';

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
    email: ''
  };

  constructor(private service: FuncionarioService) {}

  criarFuncionario() {
    alert(this.funcionario.departamento);
    this.service.criar(this.funcionario).subscribe((Response) => {
      console.log("Usuario cadastrado com sucesso");
    });
  }
}
