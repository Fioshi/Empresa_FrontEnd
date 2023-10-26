import { Component, Input } from '@angular/core';
import { Funcionario } from 'src/app/components/form/criar-funcionario/funcionario';
import { FuncionarioService } from 'src/app/components/form/funcionario.service';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent {

  @Input() haMaisFuncionarios: boolean = true;

  constructor(private service: FuncionarioService) {}


}
