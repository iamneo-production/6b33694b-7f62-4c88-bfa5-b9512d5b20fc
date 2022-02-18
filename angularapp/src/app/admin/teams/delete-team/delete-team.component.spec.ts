import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeamComponent } from './delete-team.component';

describe('DeleteTeamComponent', () => {
  let component: DeleteTeamComponent;
  let fixture: ComponentFixture<DeleteTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
