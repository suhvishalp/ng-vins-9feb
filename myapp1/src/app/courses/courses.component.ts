import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses:Course[];
  public selectedCourse:Course;

  constructor() { }

  ngOnInit(): void {
    this.selectedCourse = null;
    this.courses = [
     {courseId:1, cName:'Angular', duration:'5 Days', trainer:'Vishal'},
     {courseId:2, cName:'React', duration:'6 Days', trainer:'Wakas'},
     {courseId:3, cName:'NodeJS', duration:'8 Days', trainer:'Vishal'}
    ]
  }

  handleCourseSelect($event){
    this.selectedCourse = $event;
  }

}
