import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { IStudent } from '../IStudent';
import { FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  private studentService: StudentService;
  public displayStudentForm: FormGroup;
  private studentIdNumber: string;
  private route: Router;
  private activatedRoute: ActivatedRoute;

  studentDetails: IStudent;

  constructor(studentService: StudentService, private fb: FormBuilder,
     router: Router, activatedRoute: ActivatedRoute) {
    this.studentService = studentService;
    this.route = router;
    this.activatedRoute = activatedRoute;
    console.log('from DisplayStudentComponent constructor');
    console.log('DisplayStudentComponent - Student Service :' + this.studentService);
  }

  ngOnInit() {
    console.log('From DisplayStudentComponent ngOnInit() begin.');
    const params: any = this.activatedRoute.snapshot.params;
    console.log('Parms :' + params.id);
    this.displayStudentForm = this.fb.group({
      idNumber: new FormControl(params.id)
    });
  }

  displayStudent(studentForm: NgForm): void {
    console.log('from displayStudent() ');
    console.log(studentForm);
    this.studentIdNumber = JSON.stringify(studentForm.value.idNumber);
    console.log('from displayStudent() - studentIdNumber :' + this.studentIdNumber);
    this.studentService.getStudent(this.studentIdNumber).subscribe(students => {
      console.log('Student Information :' + students.address.city);
      this.studentDetails = students;
    });
    console.log('end displayStudent() :' + this.studentDetails);
  //  this.route.navigate(['/home']);
  }

  cancelStudent() {
    console.log('from cancelStudent() ');
    this.route.navigate(['/home']);
  }
}
