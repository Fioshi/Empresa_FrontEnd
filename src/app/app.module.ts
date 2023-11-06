import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/criar-funcionario/form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { FuncionariosComponent } from './components/funcionarios/opcoes/funcionarios.component';
import { ListarComponent } from './components/funcionarios/listar/listar.component';
import { EditarComponent } from './components/funcionarios/editar/editar.component';
import { ExcluirComponent } from './components/funcionarios/excluir/excluir.component';
import { BotaoCarregarMaisComponent } from './components/funcionarios/listar/botao-carregar-mais/botao-carregar-mais.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CriarReuniaoComponent } from './components/form/criar-reuniao/criar-reuniao/criar-reuniao.component';
import { OpcoesComponent } from './components/reunioes/opcoes/opcoes/opcoes.component';
import { ListarReuniaoComponent } from './components/reunioes/listar/listar-reuniao/listar-reuniao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    FormComponent,
    LandingComponent,
    FuncionariosComponent,
    ListarComponent,
    EditarComponent,
    ExcluirComponent,
    BotaoCarregarMaisComponent,
    CriarReuniaoComponent,
    OpcoesComponent,
    ListarReuniaoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FontAwesomeModule
  ]
})
export class AppModule {
}
