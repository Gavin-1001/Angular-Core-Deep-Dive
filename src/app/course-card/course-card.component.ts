import {Component, EventEmitter, Input, Output} from '@angular/core';
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
    course: Course; //inputs the whole courseModel to access properties instead of just a single property like title

    @Input()
    cardIndex: number; //adds number to the title of the card

    @Output()
    courseSelected = new EventEmitter<Course>();

    onCourseViewed() {
        console.log("Working");
        this.courseSelected.emit(this.course); //this emits a custom event when the button on each card is selected
        //prints out the course[0] payload from the custom event
    }

    isImageVisible() {
        return this.course && this.course.iconUrl; // return a boolean true/false if the image is visible if the course
                                                   // property is defined and if the course property icon is also defined
    }

    cardClasses() {
        if(this.course.category == 'BEGINNER'){
            return 'beginner';
            //if the courseCategory is a BEGINNER course then style the card with a lightSalmon colour
        }
        return;
    }
}
