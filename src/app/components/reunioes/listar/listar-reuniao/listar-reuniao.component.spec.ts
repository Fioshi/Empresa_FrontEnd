import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReuniaoComponent } from './listar-reuniao.component';

describe('ListarReuniaoComponent', () => {
  let component: ListarReuniaoComponent;
  let fixture: ComponentFixture<ListarReuniaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarReuniaoComponent]
    });
    fixture = TestBed.createComponent(ListarReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
