import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHookChildComponent } from './life-hook-child.component';

describe('LifeHookChildComponent', () => {
  let component: LifeHookChildComponent;
  let fixture: ComponentFixture<LifeHookChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHookChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
