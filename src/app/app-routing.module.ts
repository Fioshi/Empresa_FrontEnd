import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/criar-funcionario/form.component';
import { LandingComponent } from './components/landing/landing.component';
import { FuncionariosComponent } from './components/funcionarios/opcoes/funcionarios.component';
import { ListarComponent } from './components/funcionarios/listar/listar.component';
import { EditarComponent } from './components/funcionarios/editar/editar.component';
import { ExcluirComponent } from './components/funcionarios/excluir/excluir.component';
import { CriarReuniaoComponent } from './components/form/criar-reuniao/criar-reuniao/criar-reuniao.component';
import { OpcoesComponent } from './components/reunioes/opcoes/opcoes/opcoes.component';
import { ListarReuniaoComponent } from './components/reunioes/listar/listar-reuniao/listar-reuniao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'cadastrarFuncionario',
    component: FormComponent,
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
  },
  {
    path: 'listaFuncionarios',
    component: ListarComponent
  },
  {
    path: 'inicio',
    component: LandingComponent,
  },
  {
    path:'editarFuncionario/:id',
    component: EditarComponent
  },
  {
    path:'excluirFuncionario/:id',
    component: ExcluirComponent
  },
  {
    path: 'cadastroReuniao',
    component: CriarReuniaoComponent
  },
  {
    path: 'opcoesReuniao',
    component: OpcoesComponent
  },
  {
    path: 'listaReunioes',
    component: ListarReuniaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
