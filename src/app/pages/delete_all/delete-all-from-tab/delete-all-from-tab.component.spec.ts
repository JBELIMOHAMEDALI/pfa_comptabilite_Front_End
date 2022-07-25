import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllFromTabComponent } from './delete-all-from-tab.component';

describe('DeleteAllFromTabComponent', () => {
  let component: DeleteAllFromTabComponent;
  let fixture: ComponentFixture<DeleteAllFromTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllFromTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllFromTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
