import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [{
  path:'courses', component : CoursesComponent, data : {animation : 'course'}
},
{
  path: 'department', component: DepartmentComponent, data: {animation : 'department'}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
