import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDG9-n-tDqTfxZXxFKh2YlEngyXIME8K3s",
    authDomain: "lab5-black-jack.firebaseapp.com",
    projectId: "lab5-black-jack",
    storageBucket: "lab5-black-jack.appspot.com",
    messagingSenderId: "254101846946",
    appId: "1:254101846946:web:617a338b7aad297b9110fb",
    measurementId: "G-HLV8QE9P72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;