import { initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7hfCG2_Pa0yr3QNcYZjyfORPMd2j-dw",
  authDomain: "final-inv.firebaseapp.com",
  projectId: "final-inv",
  storageBucket: "final-inv.appspot.com",
  messagingSenderId: "255605920738",
  appId: "1:255605920738:web:652e6d500202e1172e1fbb",
  measurementId: "G-6BY960D86D"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };