import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVenueComponent } from './delete-venue.component';

describe('DeleteVenueComponent', () => {
  let component: DeleteVenueComponent;
  let fixture: ComponentFixture<DeleteVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
