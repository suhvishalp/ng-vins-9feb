import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'trainerFilter'
})
export class TrainerFilterPipe implements PipeTransform {

  transform(courses: Course[], trainer?: string): Course[] {
    if (!trainer) {
      return courses;
    }

    return courses.filter((course) => course.trainer === trainer);
  }

}
