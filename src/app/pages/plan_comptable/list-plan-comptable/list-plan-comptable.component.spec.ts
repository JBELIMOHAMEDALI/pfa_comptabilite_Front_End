import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanComptableComponent } from './list-plan-comptable.component';

describe('ListPlanComptableComponent', () => {
  let component: ListPlanComptableComponent;
  let fixture: ComponentFixture<ListPlanComptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanComptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
