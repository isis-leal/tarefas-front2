import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CardTarefasComponent } from './card-tarefas/card-tarefas.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { FormTarefaComponent } from './form-tarefa/form-tarefa.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';






@NgModule({

  declarations: [

    AppComponent,
    ListaTarefasComponent,
    CardTarefasComponent,
    AdicionarTarefaComponent,
    FormTarefaComponent,
    RodapeComponent,
   
   

  ],

  imports: [

    BrowserModule,
       HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]

})

export class AppModule { }


