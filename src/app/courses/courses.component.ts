import {Component, inject} from '@angular/core';
import {collection, collectionData, Firestore, Timestamp} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
interface OnlineCourses {
  tittle: string,
  topics: string[],
  instructor: string,
  created: Timestamp
}
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  firestore: Firestore = inject(Firestore)
  courses$: Observable<OnlineCourses[]>;
  sampleTopics: string [] = ['test1', 'test2'];

  constructor() {
    const onlineCoursesCollection = collection(this.firestore, 'ONLINE_CLASSES')
    this.courses$ = collectionData(onlineCoursesCollection)  as Observable<OnlineCourses[]>;;
  }

  protected readonly top = top;
}
