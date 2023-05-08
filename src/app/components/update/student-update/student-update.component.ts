import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { StudentsRegistrationServiceService } from 'src/app/services/students-registration-service.service'

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit{

  studentForm: FormGroup;
  studentData: any;

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

  getStudentDetails(){
    this.studentsRegistrationServiceService.getStudent().subscribe(response =>{
      this.studentData = response
      // console.log(this.studentData);
    })
}
  async studentUpdate(){
    var studentId = this.studentsRegistrationServiceService.getStudentIdToUpdate;
    this.studentsRegistrationServiceService.updateStudent(studentId,this.studentForm.value)
    await new Promise(f => setTimeout(f, 1000));
    this.getStudentDetails();
    this.router.navigate(['student']);
  }
}


