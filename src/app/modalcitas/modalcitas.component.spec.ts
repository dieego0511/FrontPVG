import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcitasComponent } from './modalcitas.component';

describe('ModalcitasComponent', () => {
  let component: ModalcitasComponent;
  let fixture: ComponentFixture<ModalcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
