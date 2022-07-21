import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSocieteComponent } from './add-update-societe.component';

describe('AddUpdateSocieteComponent', () => {
  let component: AddUpdateSocieteComponent;
  let fixture: ComponentFixture<AddUpdateSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
