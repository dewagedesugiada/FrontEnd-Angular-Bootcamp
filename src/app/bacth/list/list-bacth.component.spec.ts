import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBacthComponent } from './list-bacth.component';

describe('ListBacthComponent', () => {
  let component: ListBacthComponent;
  let fixture: ComponentFixture<ListBacthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBacthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBacthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
