import { Component } from '@angular/core';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  listaFuncionario: Funcionario[] = [];
  paginaAtual: number = 0;
  haMaisFuncionarios: boolean = true;
  filtro: string = '';

  constructor(private service: FuncionarioService) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaFuncionario) => {
        this.listaFuncionario = listaFuncionario;
      });
  }

  carregarMaisFuncionarios() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaFuncionario) => {
        this.listaFuncionario.push(...listaFuncionario);
        if (!listaFuncionario.length) this.haMaisFuncionarios = false;
      });
  }

  buscarCpf() {
    this.haMaisFuncionarios = true;
    this.paginaAtual = 0;
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaFuncionario) => {
        this.listaFuncionario = listaFuncionario;
      });
  }

  // proximaPage() {
  //   this.service.listar(this.paginaAtual+=1).subscribe((listaFuncionario) => {
  //     this.listaFuncionario = listaFuncionario;
  //   });

  //   return this.listaFuncionario;
  // }

  // voltarPage() {
  //   this.service.listar(this.paginaAtual-=1).subscribe((listaFuncionario) => {
  //     this.listaFuncionario = listaFuncionario;
  //   });
  // }

  // desativarBotaoProx() {

  // }

  // desativarBotaoVoltar() {
  //   if (this.paginaAtual - 1 < 0)
  //     return true;
  //   return false;
  // }

  // corBotaoVoltar() {
  //   if (this.paginaAtual - 1 < 0)
  //     return 'botao_desabilitado';
  //   return '';
  // }

  // corBotaoProx(){
  //   if(this.proximaPage().length < 0 )
  //   return 'botao_desabilitado';
  // return '';
  // }

  // METODO QUE CARREGA MAIS FUNCIONARIOS NA PROPRIA PAGINA
}
