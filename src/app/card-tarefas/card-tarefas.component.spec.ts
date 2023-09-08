import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTarefasComponent } from './card-tarefas.component';

describe('CardTarefasComponent', () => {
  let component: CardTarefasComponent;
  let fixture: ComponentFixture<CardTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTarefasComponent]
    });
    fixture = TestBed.createComponent(CardTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
