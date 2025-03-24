// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDREeeRuuIndpA1b8KsncQvIzf8IfVrbvM",
    authDomain: "exp2-9a9d2.firebaseapp.com",
    projectId: "exp2-9a9d2",
    storageBucket: "exp2-9a9d2.firebasestorage.app",
    messagingSenderId: "403583816709",
    appId: "1:403583816709:web:7fa8ccaf63cff367ef786c"
  },
};

const app = initializeApp(environment.firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
