import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { IStudent } from '../IStudent';

@Component({
  selector: 'app-display-student-list',
  templateUrl: './display-student-list.component.html',
  styleUrls: ['./display-student-list.component.css']
})
export class DisplayStudentListComponent implements OnInit {

  private studentService: StudentService;

  listOfStudents: IStudent[];

  constructor(studentService: StudentService) {
    this.studentService = studentService;
    console.log('from AppComponent constructor');
    console.log('Student Service :' + this.studentService);
  }

  ngOnInit() {
    console.log('From AppComponent ngOnInit() begin.');
    console.log('studentService :' + this.studentService);
    this.studentService.getStudents().subscribe(students => {
      this.listOfStudents = students;
    });
    console.log('From AppComponent ngOnInit() ' + this.listOfStudents);
  }

}
