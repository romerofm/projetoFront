import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelaEntrarComponent } from './tela-entrar/tela-entrar.component';
import {TelaCadastroComponent} from './tela-cadastro/tela-cadastro.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent
  },
    {
      path: 'telaEntrar',
      component: TelaEntrarComponent
    },
    {
      path: 'telaCadastro',
      component: TelaCadastroComponent 
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
