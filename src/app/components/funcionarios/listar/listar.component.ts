import { Component } from '@angular/core';
import { Funcionario } from '../../form/criar-funcionario/funcionario';
import { FuncionarioService } from '../../form/funcionario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  listaFuncionario: Funcionario [] = []

  constructor(private service: FuncionarioService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaFuncionario) => {
      this.listaFuncionario = listaFuncionario;
    });
  }

}
