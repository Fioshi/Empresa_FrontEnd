import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Funcionario } from 'src/app/components/funcionarios/funcionario';
import { FuncionarioService } from 'src/app/components/funcionarios/funcionario.service';
import { Reuniao } from 'src/app/components/reunioes/reuniao';
import { ReuniaoService } from 'src/app/components/reunioes/reuniao.service';

@Component({
  selector: 'app-criar-reuniao',
  templateUrl: './criar-reuniao.component.html',
  styleUrls: ['./criar-reuniao.component.css'],
})
export class CriarReuniaoComponent {
  funcionarios: Funcionario[] = [];
  funcionariosSelecionados: Funcionario[] = [];
  formulario!: FormGroup;

  reuniao: Reuniao = {
    funcionarios: [],
    horario: new Date(),
    tipo: '',
    status: true,
  };

  criarReuniao() {
    console.log(this.reuniao.tipo);
    this.serviceReuniao.criar(this.reuniao).subscribe((response) => {
      alert('criada com sucesso')
      this.rout.navigate(['/opcoesReuniao']);
    });
  }

  ngOnInit() {
    this.serviceFuncionario.listarTudo().subscribe((funcionario) => {
      this.funcionarios = funcionario;
    });
  }

  constructor(
    private rout : Router,
    private serviceFuncionario: FuncionarioService,
    private serviceReuniao: ReuniaoService
  ) {}
}
