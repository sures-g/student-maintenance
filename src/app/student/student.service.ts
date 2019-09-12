import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IStudent } from './IStudent';

@Injectable()
export class StudentService {

    // studentsUrl = 'http://localhost:8080/student/displayAll';
    // studentUrl = 'http://localhost:8080/student/display';
    // createStudentUrl = 'http://localhost:8080/student/create';
    // deleteStudentUrl = 'http://localhost:8080/student/delete';
    // updateStudentUrl = 'http://localhost:8080/student/update';

    studentsUrl = 'http://student-management.ap-south-1.elasticbeanstalk.com//student/displayAll';
    studentUrl = 'http://student-management.ap-south-1.elasticbeanstalk.com//student/display';
    createStudentUrl = 'http://student-management.ap-south-1.elasticbeanstalk.com//student/create';
    deleteStudentUrl = 'http://student-management.ap-south-1.elasticbeanstalk.com//student/delete';
    updateStudentUrl = 'http://student-management.ap-south-1.elasticbeanstalk.com//student/update';

    studentCreationMessage: String;

    constructor(private http: HttpClient) {
        console.log('From StudentService Constructor begin.');
        console.log('From Student Service Constructor: ' + this.http);
        console.log('studentsUrl' + this.studentsUrl);
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

    public getStudents(): Observable<IStudent[]> {
        return this.http.get<IStudent[]>(this.studentsUrl).do(data => console.log(data));
    }

    public getStudent(idNumber: string): Observable<IStudent> {
        console.log('started StudentService getStudent() ' + idNumber);
        idNumber = idNumber.replace('"', '');
        idNumber = idNumber.replace('"', '');
        console.log('started StudentService getStudent() after romoval of semicolon :' + idNumber);
        return this.http.get<IStudent>(this.studentUrl, {
            params: {
                studentNumber: idNumber
            }
        }).do(data => console.log(data));
    }

    public deleteStudent(idNumber: string) {
        console.log('started StudentService deleteStudent() ' + idNumber);
        idNumber = idNumber.replace('"', '');
        idNumber = idNumber.replace('"', '');
        console.log('idNumber after replace :' + idNumber);
        return this.http.get(this.deleteStudentUrl, {
            params: {
                studentNumber: idNumber
            }
         });
        // .toPromise()
        // .then(response => {
        //   console.log(response);
        // })
        // .catch(console.log);
    }

    public createStudent(student: any) {
        return this.http
            .post(this.createStudentUrl, student, this.httpOptions)
            .map(data => console.log(data));
    }

    public updateStudent(student: any) {
        return this.http
        .post(this.updateStudentUrl, student, this.httpOptions)
        .map(data => console.log(data));
    }
}
