import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FacultymockapiComponent } from './facultymockapi/facultymockapi.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'crudmock', component: FacultymockapiComponent },
  { path: 'employee/add', component: AddEmployeeComponent }, //* Define the route for call the Faculty Mock API Form
  { path: 'faculty/:id', component: DetailEmployeeComponent }, //* Define the route for displaying user data for the specific Faculty
  { path: 'faculty/edit/:id', component: AddEmployeeComponent }, //* Define the route for displaying user data for the specific Faculty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
