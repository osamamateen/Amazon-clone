import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNiUxmYzVBHreOfM-4fYG1wTYEWTmf6-8",
  authDomain: "clone-110c7.firebaseapp.com",
  databaseURL: "https://clone-110c7.firebaseio.com",
  projectId: "clone-110c7",
  storageBucket: "clone-110c7.appspot.com",
  messagingSenderId: "577662016854",
  appId: "1:577662016854:web:208b3baf1aa4dce017caf7",
  measurementId: "G-H1CS7RL4D3",
});

const auth = firebase.auth();

export { auth };
