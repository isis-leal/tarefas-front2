import { Component } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  tarefas = [] as any;
  constructor (private tarefaService: TarefasService) { this.tarefas = tarefaService.tarefas}

}
