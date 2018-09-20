import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentFeatureComponent } from './ng-content-feature.component';

describe('NgContentFeatureComponent', () => {
  let component: NgContentFeatureComponent;
  let fixture: ComponentFixture<NgContentFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
