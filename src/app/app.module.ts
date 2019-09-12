import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentService } from './student/student.service';
import { HeaderComponent } from './header.component';
import { FooterComponent} from './footer.component';
import { DisplayStudentListComponent } from './student/display-student-list/display-student-list.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { DisplayStudentComponent } from './student/display-student/display-student.component';

const appRoutes: Routes = [
  { path: 'createStudent', component: CreateStudentComponent },
  { path: 'updateStudent', component: UpdateStudentComponent},
  { path: 'deleteStudent', component: DeleteStudentComponent},
  { path: 'displayStudent', component: DisplayStudentComponent},
  { path: 'home', component: DisplayStudentListComponent},
  { path: 'deleteStudent/:id', component: DeleteStudentComponent},
  { path: 'displayStudent/:id', component: DisplayStudentComponent},
  { path: 'updateStudent/:id', component: UpdateStudentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '#', redirectTo: 'home', pathMatch: 'full'},
  { path: '*', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DisplayStudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    DisplayStudentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
     ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
