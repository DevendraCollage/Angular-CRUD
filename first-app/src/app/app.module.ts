import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//? Second Step import the HTTPClient in the app.module.ts file
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { FacultymockapiComponent } from './facultymockapi/facultymockapi.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
// import { FacultymockapiforminsertComponent } from './facultymockapiforminsert/facultymockapiforminsert.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CounterComponent,
    FacultymockapiComponent,
    DetailEmployeeComponent,
    AddEmployeeComponent,
    // FacultymockapiforminsertComponent,
    // EditfacultyComponent,
    // EditfacformComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
