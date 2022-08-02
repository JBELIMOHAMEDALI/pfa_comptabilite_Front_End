import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePlanComptableComponent } from './add-update-plan-comptable.component';

describe('AddUpdatePlanComptableComponent', () => {
  let component: AddUpdatePlanComptableComponent;
  let fixture: ComponentFixture<AddUpdatePlanComptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdatePlanComptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePlanComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
