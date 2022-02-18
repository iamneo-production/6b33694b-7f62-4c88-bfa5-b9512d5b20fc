import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRefreeComponent } from './delete-refree.component';

describe('DeleteRefreeComponent', () => {
  let component: DeleteRefreeComponent;
  let fixture: ComponentFixture<DeleteRefreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRefreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
