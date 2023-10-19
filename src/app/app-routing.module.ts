import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/criar-funcionario/form.component';
import { LandingComponent } from './components/landing/landing.component';
import { FuncionariosComponent } from './components/funcionarios/opcoes/funcionarios.component';
import { ListarComponent } from './components/funcionarios/listar/listar.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
