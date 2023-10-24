import { Component } from '@angular/core';
import { FuncionarioService } from '../../form/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../form/criar-funcionario/funcionario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((funcionario) => (this.funcionario = funcionario));
  }

  editarFuncionario() {
    this.service.editar(this.funcionario).subscribe(() => {
      this.router.navigate(['/listaFuncionarios']);
    });
  }
}
