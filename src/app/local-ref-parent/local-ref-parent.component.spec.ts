import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRefParentComponent } from './local-ref-parent.component';

describe('LocalRefParentComponent', () => {
  let component: LocalRefParentComponent;
  let fixture: ComponentFixture<LocalRefParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRefParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRefParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
