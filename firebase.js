import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSREwx925t1AD0D0-9q2kYOPYNhgF8GMw",
  authDomain: "fir-3e1b7.firebaseapp.com",
  projectId: "fir-3e1b7",
  storageBucket: "fir-3e1b7.appspot.com",
  messagingSenderId: "417442342070",
  appId: "1:417442342070:web:8c92046c02c708508f7217",
  measurementId: "G-4K5Y5HC9T1"

});

const auth = firebase.auth();

export { auth };