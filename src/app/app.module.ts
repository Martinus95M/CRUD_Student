import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// AppRoutingModule Module
import { AppRoutingModule } from './/app-routing.module';

// Import below modules for NGX Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Declare AppRoutingModule into imports array
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,  // Include it in imports array
    ReactiveFormsModule // Reactive forms module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
