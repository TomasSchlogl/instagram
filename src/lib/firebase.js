import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//call seed file once

const config = {
  apiKey: "AIzaSyDI6LcNRwuDtTDl4P5woaQIvmSFGMOEE_w",
  authDomain: "instagram-5f30b.firebaseapp.com",
  projectId: "instagram-5f30b",
  storageBucket: "instagram-5f30b.appspot.com",
  messagingSenderId: "84592739783",
  appId: "1:84592739783:web:b4563dd9c83c64746b05e2",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
