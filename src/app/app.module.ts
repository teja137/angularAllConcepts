import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ServicesComponent } from './services/services.component';
import { RoutingComponent } from './routing/routing.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesPipe } from './pipes.pipe';
import { GuardsComponent } from './guards/guards.component';
import { CanActComponent } from './can-act/can-act.component';
import { CanActGuard } from './guards/can-act.guard';
import { NameAdddressComponent } from './name-adddress/name-adddress.component';
import { CanActChild } from './guards/can-act-child.guard';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';



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
    LifeCycleHooksComponent,
    ContentParentComponent,
    ContentChildComponent,
    ServicesComponent,
    RoutingComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HttpClientComponent,
    ObservablesComponent,
    PipesComponent,
    PipesPipe,
    GuardsComponent,
    CanActComponent,
    NameAdddressComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CanActGuard, CanActChild],
  bootstrap: [AppComponent]
})
export class AppModule { }
