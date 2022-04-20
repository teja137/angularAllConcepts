import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'binding', component: DataBindingComponent},
  {path:'bg', component: BackGroundComponent},
  {path:'parentChild', component:ParentComponent},
  {path:'lch', component:LifeCycleHooksComponent},



  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
