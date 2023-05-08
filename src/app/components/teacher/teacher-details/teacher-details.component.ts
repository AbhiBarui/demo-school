import { Component, OnInit } from '@angular/core';
import { TeacherRegistrationServiceService } from 'src/app/services/teacher-registration-service.service';
import { StudentsRegistrationServiceService } from 'src/app/services/students-registration-service.service';
// import { StudentComponent } from '../../student/student.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit{
  constructor(private teacherRegistrationService : TeacherRegistrationServiceService, private studentsRegistrationServiceService : StudentsRegistrationServiceService){}
  ngOnInit(): void {
    this.getTeacherDetails()
  }

  displayedColumns = ['teacherName', 'teacherAge', 'teacherSubject', 'teacherSalary'];

    teacherData:any;
    TEACHER_list =[];
    dataSource:any;
    getTeacherDetails(){
      
      this.teacherRegistrationService.getTeacher().subscribe(response =>{
        this.teacherData = response
        this.applyTeacherFilter(this.teacherData)
      })
  }
    applyTeacherFilter(val: any) {
      var teacherData = val;
      var filterName = this.studentsRegistrationServiceService.getTeacherName;
      // console.log(filterName)
    for (let item of teacherData){
    if(item.teachers.teacherName.includes(filterName)){
      this.TEACHER_list.push(item)}
    }
    this.dataSource = new MatTableDataSource(this.TEACHER_list)
    // console.log(this.TEACHER_list)
  }
}


