import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  myVar = `sdf sdf ds`;


  @Input()
  public course: Course;

  @Output()
  public onSelectCourse: EventEmitter<Course>;

  constructor() {
    this.onSelectCourse = new EventEmitter<Course>();
   }

  ngOnInit(): void {

  }

  enrollCourse() {
    console.log('Enrolling to ..', this.course);
    this.onSelectCourse.emit(this.course);
  }
}
