import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "-",
  authDomain: "-.firebaseapp.com",
  projectId: "-",
  storageBucket: "-..com",
  messagingSenderId: "",
  appId: "1:::",
  measurementId: "G-",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
