import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudiPeriodComponent } from './edit-studi-period.component';

describe('EditStudiPeriodComponent', () => {
  let component: EditStudiPeriodComponent;
  let fixture: ComponentFixture<EditStudiPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudiPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudiPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
