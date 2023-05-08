import { Component, OnInit } from '@angular/core';
import { StudentsRegistrationServiceService } from 'src/app/services/students-registration-service.service';
import { Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  studentDataById: any;
  dataSource: any;
  constructor(private studentRegistrationService : StudentsRegistrationServiceService, private router : Router){}
  studentData:any;
  public teacherName : string;
  ngOnInit(): void {
    this.getStudentDetails();
  }
  
  displayedColumns: string[] = ['studentRoll', 'studentName', 'studentClass', 'studentSubject','studentTeacher','teacherDetails','updateStudent','removeStudent'];
  
  getStudentDetails(){
      this.studentRegistrationService.getStudent().subscribe(response =>{
        this.studentData = response
        this.dataSource = new MatTableDataSource(this.studentData)
        // console.log(this.studentData);
      })
  }

  async removeStudent(id: any){
    this.studentRegistrationService.deleteStudent(id);
    await new Promise(f => setTimeout(f, 1000));
    this.getStudentDetails();
  }

  updateStudent(id: any){
    // console.log(id);
    this.studentRegistrationService.setStudentIdToUpdate =  id;
    this.router.navigate(['student-update']);
  }

  teacherDetails(name : any){
      this.teacherName = name;
      this.router.navigate(['teacher-details']);
      this.studentRegistrationService.setTeacherName =  this.teacherName;
  }

}
