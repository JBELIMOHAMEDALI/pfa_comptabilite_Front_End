import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompanyComponent } from './first-company.component';

describe('FirstCompanyComponent', () => {
  let component: FirstCompanyComponent;
  let fixture: ComponentFixture<FirstCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
