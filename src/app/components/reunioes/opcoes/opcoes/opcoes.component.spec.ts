import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesComponent } from './opcoes.component';

describe('OpcoesComponent', () => {
  let component: OpcoesComponent;
  let fixture: ComponentFixture<OpcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcoesComponent]
    });
    fixture = TestBed.createComponent(OpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
