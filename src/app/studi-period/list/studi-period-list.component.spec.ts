import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiPeriodListComponent } from './studi-period-list.component';

describe('StudiPeriodListComponent', () => {
  let component: StudiPeriodListComponent;
  let fixture: ComponentFixture<StudiPeriodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiPeriodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
