import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropductsComponent } from './propducts.component';

describe('PropductsComponent', () => {
  let component: PropductsComponent;
  let fixture: ComponentFixture<PropductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
