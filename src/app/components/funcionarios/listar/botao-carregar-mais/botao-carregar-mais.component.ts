import { Component, Input } from '@angular/core';
import { FuncionarioService } from 'src/app/components/funcionarios/funcionario.service';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css'],
})
export class BotaoCarregarMaisComponent {
  @Input() haMaisFuncionarios: boolean = true;
  @Input() filtro: string = '';

  constructor(private service: FuncionarioService) {}

  oi() {
    if (this.filtro.length > 0) return true;
    return false;
  }

  desativado() {
    if (this.filtro.length > 0) return 'desativado';
    return '';
  }
}
