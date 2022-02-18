import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefreeComponent } from './edit-refree.component';

describe('EditRefreeComponent', () => {
  let component: EditRefreeComponent;
  let fixture: ComponentFixture<EditRefreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRefreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
