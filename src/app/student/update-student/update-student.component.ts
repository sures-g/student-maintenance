import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../IStudent';
import { FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  private studentService: StudentService;
  public displayStudentForm: FormGroup;
  public updateStudentForm: FormGroup;
  private studentIdNumber: string;
  private route: Router;
  private activatedRoute: ActivatedRoute;
  studentDetails: IStudent;

  constructor(studentService: StudentService, private fb: FormBuilder,
    router: Router, activatedRoute: ActivatedRoute) {
      this.studentService = studentService;
      this.route = router;
      this.activatedRoute = activatedRoute;
      console.log('from UpdateStudentComponent constructor');
    }

  ngOnInit() {
    console.log('From UpdateStudentComponent ngOnInit() begin.');
    const params: any = this.activatedRoute.snapshot.params;
    console.log('Parms :' + params.id);
    this.displayStudentForm = this.fb.group({
      idNumber: new FormControl(params.id)
    });

    this.updateStudentForm = this.fb.group({
      idNumber: new FormControl(''),
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      studentClass: new FormControl(''),
      institute: new FormControl(''),
      lastUpdatedDate: new FormControl(''),
      creationDate: new FormControl(''),
      address: this.fb.group({
        doorNumber: new FormControl(''),
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        pin: new FormControl(''),
      })
    });
  }

  editStudentDetails(displayStudentForm: NgForm) {
    console.log('from editStudentDetails() ');
    console.log(displayStudentForm);
    this.studentIdNumber = JSON.stringify(displayStudentForm.value.idNumber);
    console.log('from editStudentDetails() - studentIdNumber :' + this.studentIdNumber);
    this.studentService.getStudent(this.studentIdNumber).subscribe(students => {
      this.updateStudentForm = this.fb.group({
        idNumber: new FormControl(students.idNumber),
        firstName: new FormControl(students.firstName),
        middleName: new FormControl(students.middleName),
        lastName: new FormControl(students.lastName),
        studentClass: new FormControl(students.studentClass),
        institute: new FormControl(students.institute),
        lastUpdatedDate: new FormControl(students.lastUpdatedDate),
        creationDate: new FormControl(students.creationDate),
        address: this.fb.group({
          doorNumber: new FormControl(students.address.doorNumber),
          street: new FormControl(students.address.street),
          city: new FormControl(students.address.city),
          state: new FormControl(students.address.state),
          pin: new FormControl(students.address.pin),
        })
      });
      this.studentDetails = students;
    });
    console.log('end displayStudent() :' + this.studentDetails);
  }

  saveStudentDetails(updateStudentForm: NgForm) {
    console.log('from createStudent() ');
    console.log(updateStudentForm);
    console.log(JSON.stringify(updateStudentForm.value));
    this.studentService.updateStudent(JSON.stringify(updateStudentForm.value)).subscribe(student => {
      console.log(student);
    });
    // console.log('Student after Creation: ' + this.student);
    this.updateStudentForm.reset();
    this.route.navigate(['/home']);
  }

  cancelStudent() {
    console.log('from cancelStudent() ');
    this.route.navigate(['/home']);
  }
}
