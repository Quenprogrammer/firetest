import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {collection, collectionData, Firestore, Timestamp} from "@angular/fire/firestore";
import {Observable} from "rxjs";

interface OnlineCourses {
  tittle: string,
  topics: string[],
  instructor: string,
  created: Timestamp
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'firetest';

  firestore: Firestore = inject(Firestore)
  courses$: Observable<OnlineCourses[]>;
  sampleTopics: string [] = ['test1', 'test2'];

  constructor() {
    const onlineCoursesCollection = collection(this.firestore, 'ONLINE_CLASSES')
    this.courses$ = collectionData(onlineCoursesCollection)  as Observable<OnlineCourses[]>;;
  }

  protected readonly top = top;
}
