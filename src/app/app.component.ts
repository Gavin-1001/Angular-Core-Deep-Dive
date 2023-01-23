import {Component, ViewChild} from '@angular/core';
import {COURSES} from "../db-data";
import {Course} from "./model/course";
import {CourseCardComponent} from "./course-card/course-card.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    //title = 'angularCoreDeepDive';

    courses = COURSES; //can access the complete list of courses

    title = COURSES[0].description;

    price = 9.99;

    rate = 0.67;

    course = COURSES[0];

    @ViewChild(CourseCardComponent)
    card:CourseCardComponent;

    startDate=new Date(2000, 0, 1);


    onCourseSelected(course:Course) {
        console.log("App component - click event bubbled... ", course);
        console.log(this.card)
    }
}
