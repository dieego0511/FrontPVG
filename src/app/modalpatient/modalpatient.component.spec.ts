import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpatientComponent } from './modalpatient.component';

describe('ModalpatientComponent', () => {
  let component: ModalpatientComponent;
  let fixture: ComponentFixture<ModalpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
