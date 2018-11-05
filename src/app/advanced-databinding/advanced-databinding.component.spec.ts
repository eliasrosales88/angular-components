import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDatabindingComponent } from './advanced-databinding.component';

describe('AdvancedDatabindingComponent', () => {
  let component: AdvancedDatabindingComponent;
  let fixture: ComponentFixture<AdvancedDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
