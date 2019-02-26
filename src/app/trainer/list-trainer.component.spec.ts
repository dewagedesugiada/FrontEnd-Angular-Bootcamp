import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainerComponent } from './list-trainer.component';

describe('ListTrainerComponent', () => {
  let component: ListTrainerComponent;
  let fixture: ComponentFixture<ListTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
