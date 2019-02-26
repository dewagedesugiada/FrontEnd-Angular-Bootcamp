import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudiMaterialComponent } from './list-studi-material.component';

describe('ListStudiMaterialComponent', () => {
  let component: ListStudiMaterialComponent;
  let fixture: ComponentFixture<ListStudiMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudiMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
