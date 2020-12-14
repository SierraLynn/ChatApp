import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA9DQTDs-AUSWuwsdq3cy5Qb4aFQjXHYBY",
    authDomain: "chat-f4333.firebaseapp.com",
    databaseURL: "https://chat-f4333-default-rtdb.firebaseio.com",
    projectId: "chat-f4333",
    storageBucket: "chat-f4333.appspot.com",
    messagingSenderId: "343571778565",
    appId: "1:343571778565:web:48ed73ac524b0204d1a06c"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);