import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"app-shop-fe644","appId":"1:389096506935:web:d77e97e329292a035a61b2","storageBucket":"app-shop-fe644.firebasestorage.app","apiKey":"AIzaSyBM21Fpp2NNmnxlcagw0ARLu0WyYjdx2SU","authDomain":"app-shop-fe644.firebaseapp.com","messagingSenderId":"389096506935","measurementId":"G-DWF9JR1P93"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
