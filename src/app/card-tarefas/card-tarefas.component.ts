import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tarefas',
  templateUrl: './card-tarefas.component.html',
  styleUrls: ['./card-tarefas.component.css']
})
export class CardTarefasComponent {

 @Input() tarefa:any;

}
