import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentListComponent } from './display-student-list.component';

describe('DisplayStudentListComponent', () => {
  let component: DisplayStudentListComponent;
  let fixture: ComponentFixture<DisplayStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
