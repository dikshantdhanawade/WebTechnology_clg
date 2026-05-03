import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentservice } from './studentservice';

describe('Studentservice', () => {
  let component: Studentservice;
  let fixture: ComponentFixture<Studentservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentservice],
    }).compileComponents();

    fixture = TestBed.createComponent(Studentservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
