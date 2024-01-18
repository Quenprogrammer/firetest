import {Component, inject} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";
import {DocumentReference} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  firestore: Firestore = inject(Firestore)
  userSampleCollection = collection(this.firestore, 'sampleUsers');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

  });

  onSubmit() {
    // alert("I have been submitted");
    let isConfirmed = confirm("Are you sure you want to submit");
    if (isConfirmed) {
      const firstName = this.profileForm.value.firstName;
      const lastName = this.profileForm.value.lastName;
      // console.log("First name is ", firstName);
      //console.log("Last name is", lastName);

      addDoc(this.userSampleCollection, {
        "firstName": firstName,
        "lastName": lastName,
        "SentBy":"Musa Jahun"
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
}
