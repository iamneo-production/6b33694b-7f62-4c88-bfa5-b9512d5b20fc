import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefreeComponent } from './add-refree.component';

describe('AddRefreeComponent', () => {
  let component: AddRefreeComponent;
  let fixture: ComponentFixture<AddRefreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRefreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
