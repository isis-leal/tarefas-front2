import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

const routes: Routes = [

  {
    path: "",

    component: ListaTarefasComponent

  },

  {

    path: "adicionar",

    component: AdicionarTarefaComponent

  }

]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot (routes)
  ]
})
export class AppRoutingModule { }
