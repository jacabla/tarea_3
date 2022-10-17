import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: "home", component:HomeComponent
  },
  {
    path: "about", component:AboutComponent
  },
  {
    path: "subject", component:SubjectComponent
  },
  {
    path: "", component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
