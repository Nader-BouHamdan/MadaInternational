import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsAndEvaluationsComponent } from './assessments-and-evaluations.component';

describe('AssessmentsAndEvaluationsComponent', () => {
  let component: AssessmentsAndEvaluationsComponent;
  let fixture: ComponentFixture<AssessmentsAndEvaluationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentsAndEvaluationsComponent]
    });
    fixture = TestBed.createComponent(AssessmentsAndEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
