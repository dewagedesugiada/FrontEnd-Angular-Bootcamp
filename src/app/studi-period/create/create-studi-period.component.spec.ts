import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudiPeriodComponent } from './create-studi-period.component';

describe('CreateStudiPeriodComponent', () => {
  let component: CreateStudiPeriodComponent;
  let fixture: ComponentFixture<CreateStudiPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudiPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudiPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
