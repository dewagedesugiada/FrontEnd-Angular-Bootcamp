import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudiMaterialComponent } from './edit-studi-material.component';

describe('EditStudiMaterialComponent', () => {
  let component: EditStudiMaterialComponent;
  let fixture: ComponentFixture<EditStudiMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudiMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
