import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEInterfaceComponent } from './lista-einterface.component';

describe('ListaEInterfaceComponent', () => {
  let component: ListaEInterfaceComponent;
  let fixture: ComponentFixture<ListaEInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
