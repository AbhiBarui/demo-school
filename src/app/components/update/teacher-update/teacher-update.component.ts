import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { TeacherRegistrationServiceService } from 'src/app/services/teacher-registration-service.service'

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})

export class TeacherUpdateComponent implements OnInit{

  teacherForm: FormGroup;
  teacherData: any;

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
  getTeacherDetails(){
    this.teacherRegistrationServiceService.getTeacher().subscribe(response =>{
      this.teacherData = response
      // console.log(this.studentData);
    })
}
  async teacherUpdate(){
    var teacherId = this.teacherRegistrationServiceService.getTeacherIdToUpdate;
    this.teacherRegistrationServiceService.updateTeacher(teacherId,this.teacherForm.value)
    await new Promise(f => setTimeout(f, 1000));
    this.getTeacherDetails();
    this.router.navigate(['teacher']);
  }
}



