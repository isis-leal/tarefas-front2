import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas= [
    {titulo : 'Estudar TypeScript',
    data: new Date (),
urgente: false
    },

    {titulo : 'Estudar Spring',
    data: new Date (),
urgente: true
    }

  ]

  constructor() { }
}
