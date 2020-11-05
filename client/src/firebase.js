import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6gN7CA5wqqPSS6HfLDcP2UsEFDiBjxEA",
  authDomain: "finalproject-473f6.firebaseapp.com",
  databaseURL: "https://finalproject-473f6.firebaseio.com",
  projectId: "finalproject-473f6",
  storageBucket: "finalproject-473f6.appspot.com",
  messagingSenderId: "475082705942",
  appId: "1:475082705942:web:c9523cc25280b7f3593937",
  measurementId: "G-ZQ3ET8TMV0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
