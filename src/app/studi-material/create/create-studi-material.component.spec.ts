import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudiMaterialComponent } from './create-studi-material.component';

describe('CreateStudiMaterialComponent', () => {
  let component: CreateStudiMaterialComponent;
  let fixture: ComponentFixture<CreateStudiMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudiMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
