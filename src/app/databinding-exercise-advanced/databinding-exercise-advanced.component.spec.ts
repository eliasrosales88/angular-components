import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingExerciseAdvancedComponent } from './databinding-exercise-advanced.component';

describe('DatabindingExerciseAdvancedComponent', () => {
  let component: DatabindingExerciseAdvancedComponent;
  let fixture: ComponentFixture<DatabindingExerciseAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingExerciseAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingExerciseAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
