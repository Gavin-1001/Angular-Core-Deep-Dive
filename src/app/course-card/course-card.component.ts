import {Component, Input} from '@angular/core';
import {Course} from "../model/course";

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

    //@Input()
    //title: string; //allowed to access the title of the course. See app.html

    @Input()
    course:Course; //inputs the whole courseModel to access properties instead of just a single property like title


}
