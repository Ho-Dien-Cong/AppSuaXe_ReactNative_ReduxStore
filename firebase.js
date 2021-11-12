// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
/* import { getAnalytics } from "firebase/analytics";  */
const firebaseConfig = {
  apiKey: "AIzaSyCXFxZWd18pNxsgbQaVUcL575HIcXez5Fo",
  authDomain: "bth4-d5049.firebaseapp.com",
  databaseURL: "https://bth4-d5049-default-rtdb.firebaseio.com",
  projectId: "bth4-d5049",
  storageBucket: "bth4-d5049.appspot.com",
  messagingSenderId: "24144431299",
  appId: "1:24144431299:web:adaf5871885d63f3edba76",
  measurementId: "G-JWKMP10GJ5"
};

// Initialize Firebase
let app;
if(firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app();
}
const auth= firebase.auth();
export {auth};
/* const app = initializeApp(firebaseConfig); */
/* const analytics = getAnalytics(app); */