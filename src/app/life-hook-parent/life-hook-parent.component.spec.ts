import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHookParentComponent } from './life-hook-parent.component';

describe('LifeHookParentComponent', () => {
  let component: LifeHookParentComponent;
  let fixture: ComponentFixture<LifeHookParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHookParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHookParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
