import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm , FormBuilder} from '@angular/forms';
import { StudentService } from '../student.service';
import { IStudent } from '../IStudent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentForm: FormGroup;
  private studentService: StudentService;
  private student: IStudent;
  private route: Router;

  public createStudentMessage: String;

  constructor(studentService: StudentService, private fb: FormBuilder, router: Router) {
    this.studentService = studentService;
    this.route = router;
    console.log('From CreateStudentComponent() ');
   }

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      studentClass: new FormControl(''),
      institute: new FormControl(''),
      address: this.fb.group({
        doorNumber: new FormControl(''),
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        pin: new FormControl(''),
      })
    });
  }

  createStudent(studentForm: NgForm): void {
    console.log('from createStudent() ');
    // console.log(studentForm);
    // console.log(JSON.stringify(studentForm.value));
    this.studentService.createStudent(JSON.stringify(studentForm.value)).subscribe(student => this.student);
    console.log('Student after Creation: ' + this.student);
    this.studentForm.reset();
    this.createStudentMessage = this.studentService.studentCreationMessage;
    console.log('Create Student Message :' + this.createStudentMessage);
    this.route.navigate(['/home']);
  }

  cancelStudent() {
    console.log('from cancelStudent() ');
    this.route.navigate(['/home']);
  }
}
