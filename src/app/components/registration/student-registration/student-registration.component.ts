import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { StudentsRegistrationServiceService } from 'src/app/services/students-registration-service.service'

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit{

  studentForm: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient, private router: Router, private studentsRegistrationServiceService: StudentsRegistrationServiceService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.studentForm = this.builder.group({
      studentRoll:[''],
      studentName:[''],
      studentClass:[''],
      studentSubject:[''],
      studentTeacher:['']
    })
  }
  studentRegistration(){
    this.studentsRegistrationServiceService.addStudent(this.studentForm.value)
      .subscribe(res=>{
        this.studentForm.reset;
        this.router.navigate(['student']);
      })
  }
}
