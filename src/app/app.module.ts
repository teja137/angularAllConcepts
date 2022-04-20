import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { DirectiveDirective } from './directive.directive';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HomeComponent,
    DirectiveDirective,
    DataBindingComponent,
    BackGroundComponent,
    ParentComponent,
    ChildComponent,
    LifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
