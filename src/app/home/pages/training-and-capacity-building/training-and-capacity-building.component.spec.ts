import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndCapacityBuildingComponent } from './training-and-capacity-building.component';

describe('TrainingAndCapacityBuildingComponent', () => {
  let component: TrainingAndCapacityBuildingComponent;
  let fixture: ComponentFixture<TrainingAndCapacityBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingAndCapacityBuildingComponent]
    });
    fixture = TestBed.createComponent(TrainingAndCapacityBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
