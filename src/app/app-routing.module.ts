import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchoolComponent} from './components/school/school.component'
import {TeacherComponent} from './components/teacher/teacher.component'
import {StudentComponent} from './components/student/student.component'
import {RegistrationComponent} from './components/registration/registration.component'
import {StudentRegistrationComponent} from './components/registration/student-registration/student-registration.component'
import {TeacherRegistrationComponent} from './components/registration/teacher-registration/teacher-registration.component'
import { TeacherDetailsComponent } from './components/teacher/teacher-details/teacher-details.component';
import { StudentUpdateComponent } from './components/update/student-update/student-update.component';
import { TeacherUpdateComponent } from './components/update/teacher-update/teacher-update.component';

const routes: Routes = [ 
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'teacher-registration', component: TeacherRegistrationComponent },
  { path: 'teacher-details', component: TeacherDetailsComponent},
  { path: 'student-update', component: StudentUpdateComponent},
  { path: 'teacher-update', component: TeacherUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
