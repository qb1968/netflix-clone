import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCh-0D8m_ixVaewmKu0Dkw_GhP-1U-tEAA",
    authDomain: "netflix-8385a.firebaseapp.com",
    databaseURL: "https://netflix-8385a.firebaseio.com",
    projectId: "netflix-8385a",
    storageBucket: "netflix-8385a.appspot.com",
    messagingSenderId: "888130529997",
    appId: "1:888130529997:web:9cadf18363cdfb01825784"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
