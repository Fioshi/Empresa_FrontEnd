import { Component } from '@angular/core';

import { FuncionarioService } from '../../funcionarios/funcionario.service';
import { Funcionario } from '../../funcionarios/funcionario';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      sobrenome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(11),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      departamento: [, [Validators.required]],
    });
  }

  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  criarFuncionario() {
    console.log(this.formulario.get('nome')?.errors);
    if (this.formulario.valid) {
      try {
        this.service.criar(this.formulario.value).subscribe((Response) => {
          alert('Cadastrado com sucesso!');
          this.router.navigate(['/listaFuncionarios']);
        });
      } catch (e) {
        alert(e);
      }
    }
  }

  habilitarBotao() {
    if (this.formulario.valid) return '';
    return 'botao_desabilitado';
  }
}
