import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from './first/first.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HttpComponent } from './http/http.component';
import { RandomComponent } from './random/random.component';
const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component : HomeComponent},
  {path: 'Directive',component: DirectiveComponent},
  {path: 'Parent-Chilren', component: ParentComponent},
  {path: 'Service', component: FirstComponent},
  {path: 'Viewchild', component: ViewchildComponent},
  {path: 'http', component: HttpComponent},
  {path: 'random', component:RandomComponent},
  {path:'**', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
