// import firebase from "firebase";


 import * as firebase from 'firebase';
const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyAK2Et3IxOwbYzjMCdn7n7nyTVskG2XCpQ",
    authDomain: "replica-d5dde.firebaseapp.com",
    projectId: "replica-d5dde",
    storageBucket: "replica-d5dde.appspot.com",
    messagingSenderId: "1055909019092",
    appId: "1:1055909019092:web:5c4c475da837bf839f6a41",
    measurementId: "G-BDXHDQMMP0",

});



  const db =firebaseApp.firestore();

  const auth=firebase.auth();

  export {auth};