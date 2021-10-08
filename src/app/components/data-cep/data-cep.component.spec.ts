import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCepComponent } from './data-cep.component';

describe('DataCepComponent', () => {
  let component: DataCepComponent;
  let fixture: ComponentFixture<DataCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
