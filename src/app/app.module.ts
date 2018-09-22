import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { NgContentFeatureComponent } from './ng-content-feature/ng-content-feature.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    TwoWayDatabindingComponent,
    NgContentFeatureComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
