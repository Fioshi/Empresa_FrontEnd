import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarReuniaoComponent } from './criar-reuniao.component';

describe('CriarReuniaoComponent', () => {
  let component: CriarReuniaoComponent;
  let fixture: ComponentFixture<CriarReuniaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarReuniaoComponent]
    });
    fixture = TestBed.createComponent(CriarReuniaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
