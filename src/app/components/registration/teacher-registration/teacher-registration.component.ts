import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { TeacherRegistrationServiceService } from 'src/app/services/teacher-registration-service.service'

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit{

  teacherForm: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient, private router: Router, private teacherRegistrationServiceService: TeacherRegistrationServiceService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.teacherForm = this.builder.group({
      teacherName:[''],
      teacherAge:[''],
      teacherSubject:[''],
      teacherSalary:['']
    })
  }
  teacherRegistration(){
    this.teacherRegistrationServiceService.addTeacher(this.teacherForm.value)
      .subscribe(res=>{
        this.teacherForm.reset;
        this.router.navigate(['teacher']);
      })
  }
}



