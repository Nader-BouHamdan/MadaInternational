import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalWritingAndFundraisingComponent } from './proposal-writing-and-fundraising.component';

describe('ProposalWritingAndFundraisingComponent', () => {
  let component: ProposalWritingAndFundraisingComponent;
  let fixture: ComponentFixture<ProposalWritingAndFundraisingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalWritingAndFundraisingComponent]
    });
    fixture = TestBed.createComponent(ProposalWritingAndFundraisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
