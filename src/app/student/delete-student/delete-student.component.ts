import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { StudentService } from '../student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  public deleteStudentForm: FormGroup;
  private studentService: StudentService;
  private studentIdNumber: string;
  private route: Router;
  private activatedRoute: ActivatedRoute;
  private data;

  constructor(studentService: StudentService, private fb: FormBuilder,
      router: Router, activatedRoute: ActivatedRoute) {
    this.studentService = studentService;
    this.route = router;
    this.activatedRoute = activatedRoute;
    console.log('From DeleteStudentComponent() ');
   }

  ngOnInit() {
    console.log('from DeleteStudentComponent ngOnInit() ');
    const params = this.activatedRoute.snapshot.params;
    this.deleteStudentForm = this.fb.group({
      idNumber: new FormControl(params.id)
    });
  }

  deleteStudent(studentForm: NgForm): void {
    console.log('from deleteStudent() ');
    console.log(studentForm);
    this.studentIdNumber = JSON.stringify(studentForm.value.idNumber);
    console.log('from deleteStudent() - studentIdNumber :' + this.studentIdNumber);
    this.studentService.deleteStudent(this.studentIdNumber).subscribe(data => this.data);
    console.log('end deleteStudent() :' + this.data);
    this.route.navigate(['/home']);
  }

  cancelStudent() {
    console.log('from cancelStudent() ');
    this.route.navigate(['/home']);
  }

}
