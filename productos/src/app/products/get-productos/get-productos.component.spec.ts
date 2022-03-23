import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductosComponent } from './get-productos.component';

describe('GetProductosComponent', () => {
  let component: GetProductosComponent;
  let fixture: ComponentFixture<GetProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
