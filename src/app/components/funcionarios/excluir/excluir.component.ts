import { Component } from '@angular/core';
import { FuncionarioService } from '../../form/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../form/criar-funcionario/funcionario';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css'],
})
export class ExcluirComponent {
  funcionario: Funcionario = {
    id: 0,
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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((funcionario) => this.funcionario = funcionario);
  }

  excluirFuncionario() {
    this.service.excluir(this.funcionario.id).subscribe(() => {
      this.router.navigate(['/listaFuncionarios']);
    });
  }

  cancelar() {
    this.router.navigate(['/listaFuncionarios']);
  }
}
