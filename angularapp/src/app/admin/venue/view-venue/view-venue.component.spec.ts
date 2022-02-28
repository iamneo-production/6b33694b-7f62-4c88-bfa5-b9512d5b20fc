import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVenueComponent } from './view-venue.component';

describe('ViewVenueComponent', () => {
  let component: ViewVenueComponent;
  let fixture: ComponentFixture<ViewVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
