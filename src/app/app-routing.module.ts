import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { CanActComponent } from './can-act/can-act.component';
import { CompanyComponent } from './company/company.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CanActChild } from './guards/can-act-child.guard';
import { CanActGuard } from './guards/can-act.guard';
import { GuardsComponent } from './guards/guards.component';
import { HomeComponent } from './home/home.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { NameAdddressComponent } from './name-adddress/name-adddress.component';
import { ObservablesComponent } from './observables/observables.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingComponent } from './routing/routing.component';
import { ServicesComponent } from './services/services.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'binding', component: DataBindingComponent},
  {path:'bg', component: BackGroundComponent},
  {path:'parentChild', component:ParentComponent},
  {path:'lch', component:LifeCycleHooksComponent},
  {path:'cpp', component: ContentParentComponent},
  {path:'cpc', component: ContentChildComponent},
  {path:'service', component: ServicesComponent},
  {path:'routing', component: RoutingComponent},
  { path: 'lazyLoad', loadChildren: () => import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
  {path:'template', component: TemplateFormComponent},
  {path:'reactive', component: ReactiveFormComponent},
  {path:'http', component: HttpClientComponent},
  {path:'obs', component: ObservablesComponent},
  {path:'pipes', component: PipesComponent},
  {path:'guards', component: GuardsComponent},
  {path:'ca', component: CanActComponent, 
  canActivate: [CanActGuard]
},
  {path:'na', component: NameAdddressComponent,
  canActivate: [CanActGuard],
  canActivateChild: [CanActChild], 
  children: [
    // {path:'', redirectTo:'address', pathMatch: 'full'},
    {path:'address', component: AddressComponent },
    {path:'company', component: CompanyComponent}
  ]
},



  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
