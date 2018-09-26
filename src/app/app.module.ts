import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { NgContentFeatureComponent } from './ng-content-feature/ng-content-feature.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DatabindingExerciseComponent } from './databinding-exercise/databinding-exercise.component';
import { InputChildComponent } from './input-child/input-child.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { OutputChildComponent } from './output-child/output-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    TwoWayDatabindingComponent,
    NgContentFeatureComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DatabindingExerciseComponent,
    InputChildComponent,
    InputParentComponent,
    OutputParentComponent,
    OutputChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
