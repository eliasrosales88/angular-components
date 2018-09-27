import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRefChildComponent } from './local-ref-child.component';

describe('LocalRefChildComponent', () => {
  let component: LocalRefChildComponent;
  let fixture: ComponentFixture<LocalRefChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRefChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
