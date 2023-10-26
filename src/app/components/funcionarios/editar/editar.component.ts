import { Component } from '@angular/core';
import { FuncionarioService } from '../../form/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../form/criar-funcionario/funcionario';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {

  formulario!: FormGroup;

  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(
      (funcionario) =>
        (this.formulario = this.formBuilder.group({
          id: [funcionario.id, Validators.compose([
            Validators.required,
          ])],
          nome: [funcionario.nome, Validators.compose([
            Validators.required,
          ])],
          sobrenome: [funcionario.sobrenome, Validators.compose([
            Validators.required,
          ])],
          cpf: [funcionario.cpf, Validators.compose([
            Validators.required,
            Validators.minLength(11)
          ])],
          email: [funcionario.email, Validators.compose([
            Validators.required,
            Validators.email,
          ])],
        }))
    );
  }

  editarFuncionario() {
    if (this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listaFuncionarios']);
      });
    }
  }

  desabilitarBotao(){
    if (this.formulario.valid)
      return ''
    return 'botao_desabilitado'
  }
}
