import {Component, inject} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, Timestamp} from "@angular/fire/firestore";
import {FormGroup, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
interface instructors {
  id:string,
  ID: string,
  name: string,
  phoneNumber: number,
  photoUrl:string,
}
@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.css'
})
export class InstructorsComponent {
  firestore: Firestore = inject(Firestore)
  instructorsCollection = collection(this.firestore, 'instructors');
  instructor$: Observable<instructors[]>;
  constructor() {
    const instructorsCollection = collection(this.firestore, 'instructors')
    this.instructor$ = collectionData(instructorsCollection,{idField:'id'})  as Observable<instructors[]>;
  }
  protected readonly top = top;

  profileForm = new FormGroup({
    ID: new FormControl(''),
   name: new FormControl(''),
    phoneNumber: new FormControl(''),
    photoUrl: new FormControl(''),

  });

  onSubmit() {
    // alert("I have been submitted");
    let isConfirmed = confirm("Are you sure you want to submit");
    if (isConfirmed) {
      const ID = this.profileForm.value.ID;
      const name = this.profileForm.value.name;
      const phoneNumber = this.profileForm.value.phoneNumber;
      const photoUrl = this.profileForm.value.photoUrl;
      addDoc(this.instructorsCollection, {
        ID,
         name,
        "phoneNumber": phoneNumber,
         photoUrl,
      })
        .then((documentReference) => {
          // the documentReference provides access to the newly created document
          console.log("I have been added to the database");
        })
        .catch(e => {
          console.log("error encountered while adding to database", e)
        })
    }
  }

  deleteInstructor(ins:  instructors ) {
    let isConfirmed = confirm(`Are you sure you want to delete ${ins.name} with id ${ins.ID}`);
    if(isConfirmed){
      deleteDoc(doc(this.firestore, 'instructors', ins.id))
        .then(k=>{
          alert("I have been deleted successfully");
        }).catch(e=>{
          console.warn("error encountered while deleting");
      })
    }
  }
}
