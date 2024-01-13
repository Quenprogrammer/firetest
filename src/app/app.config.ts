import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"testing-30e80","appId":"1:996617703471:web:b6a1c052a452092f0776da","databaseURL":"https://testing-30e80-default-rtdb.firebaseio.com","storageBucket":"testing-30e80.appspot.com","apiKey":"AIzaSyC-r9aGKCwa0dHN8SxkHSp79xHLHXjQSPw","authDomain":"testing-30e80.firebaseapp.com","messagingSenderId":"996617703471","measurementId":"G-9L8R4CK6S2"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
