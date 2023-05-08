import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Teachers } from '../models/teachers';
import { Observable } from 'rxjs';
import { Teachers } from '../models/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherRegistrationServiceService {
    teacherIdToUpdate: number;

    constructor(private http: HttpClient) { }

    addTeacher(teachers: Teachers): Observable<any> {
      return this.http.post('http://localhost:3000/teachers', { teachers });
    }

    getTeacher():Observable<Element>{
      return this.http.get<Element>('http://localhost:3000/teachers');
    }

    deleteTeacher(id: any,){
      if(id !== ''){
       this.http.delete('http://localhost:3000/teachers' + '/'+ id).subscribe((res:any)=>{
        // window.location.reload();
      })
      }
    }
      updateTeacher(id: any, teachers: Teachers){
        if(id !== ''){
          this.http.put('http://localhost:3000/teachers' + '/'+ id, { teachers }).subscribe((res:any)=>{
           // window.location.reload();
         })
         }
      }

      set setTeacherIdToUpdate(val: number){
        this.teacherIdToUpdate = val;
      }
      get getTeacherIdToUpdate():number{
        return this.teacherIdToUpdate;
      }
   }
