import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanComptableComponent } from './add-plan-comptable.component';

describe('AddPlanComptableComponent', () => {
  let component: AddPlanComptableComponent;
  let fixture: ComponentFixture<AddPlanComptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlanComptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
