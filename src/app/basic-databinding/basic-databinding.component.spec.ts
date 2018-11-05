import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatabindingComponent } from './basic-databinding.component';

describe('BasicDatabindingComponent', () => {
  let component: BasicDatabindingComponent;
  let fixture: ComponentFixture<BasicDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
