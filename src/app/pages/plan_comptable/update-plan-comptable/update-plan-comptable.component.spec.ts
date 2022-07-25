import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlanComptableComponent } from './update-plan-comptable.component';

describe('UpdatePlanComptableComponent', () => {
  let component: UpdatePlanComptableComponent;
  let fixture: ComponentFixture<UpdatePlanComptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlanComptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlanComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
