import { Routes } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {InstructorsComponent} from "./instructors/instructors.component";
import {ProjectsComponent} from "./projects/projects.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'testing', component: ProfileEditorComponent },
];
