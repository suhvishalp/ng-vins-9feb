import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];
  public selectedCourse: Course;

  constructor() { }

  ngOnInit(): void {
    this.selectedCourse = null;
    this.courses = [
     new Course( 1, 'Angular', 2000, '5 Days', 'Vishal',new Date('02/15/2020'),'A timezone'),
     new Course( 2, 'React', 2000, '3 Days', 'Vishal',new Date('02/15/2020'),'A timezone'),
    ];
  }

  handleCourseSelect($event) {
    this.selectedCourse = $event;
  }

}
