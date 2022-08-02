import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTaxeComponent } from './add-update-taxe.component';

describe('AddUpdateTaxeComponent', () => {
  let component: AddUpdateTaxeComponent;
  let fixture: ComponentFixture<AddUpdateTaxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateTaxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateTaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
