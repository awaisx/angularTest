import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    component.totalVote = 0;
    fixture.detectChanges();
  });

  it('vote should be 1 ', () => {
    const value = component.upVote();    
    expect(component.totalVote).toBe(1);
  });

  it('vote should be -1', () => {
    const value = component.downVote();   
    expect(component.totalVote).toBe(-1);
  });


});
