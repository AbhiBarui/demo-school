import { Component, OnInit } from '@angular/core';
import { TeacherRegistrationServiceService } from 'src/app/services/teacher-registration-service.service';
import { Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  constructor(private teacherRegistrationService : TeacherRegistrationServiceService, private router : Router){}
  ngOnInit(): void {
    this.getTeacherDetails();
  }
  displayedColumns: string[] = ['teacherName', 'teacherAge', 'teacherSubject', 'teacherSalary','updateTeacher','removeTeacher'];

  teacherData:any;
  getTeacherDetails(){
      this.teacherRegistrationService.getTeacher().subscribe(response =>{
        this.teacherData = response
        // console.log(this.teacherData);
      })

  }
  async removeTeacher(id: any){
    this.teacherRegistrationService.deleteTeacher(id);
    await new Promise(f => setTimeout(f, 1000));
    this.getTeacherDetails();
  }

  updateTeacher(id: any){
    // console.log(id);
    this.teacherRegistrationService.setTeacherIdToUpdate =  id;
    this.router.navigate(['teacher-update']);
  }
}