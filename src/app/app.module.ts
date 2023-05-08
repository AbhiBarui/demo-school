import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { SchoolComponent } from './components/school/school.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TeacherRegistrationComponent } from './components/registration/teacher-registration/teacher-registration.component';
import { StudentRegistrationComponent } from './components/registration/student-registration/student-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TeacherDetailsComponent } from './components/teacher/teacher-details/teacher-details.component';
import { StudentUpdateComponent } from './components/update/student-update/student-update.component';
import { TeacherUpdateComponent } from './components/update/teacher-update/teacher-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    StudentComponent,
    TeacherComponent,
    SchoolComponent,
    RegistrationComponent,
    TeacherRegistrationComponent,
    StudentRegistrationComponent,
    TeacherDetailsComponent,
    StudentUpdateComponent,
    TeacherUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
