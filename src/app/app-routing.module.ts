import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/criar-funcionario/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrarFuncionario',
    pathMatch: 'full'
  },
  {
    path: 'cadastrarFuncionario',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
