import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { Constants } from "expo-constants";

//Firebase Config:
const firebaseConfig = {
  //   apiKey: Constants.manifest.extra.apiKey,
  //   authDomain: Constants.manifest.extra.authDomain,
  //   projectId: Constants.manifest.extra.projectId,
  //   storageBucket: Constants.manifest.extra.storageBucket,
  //   messagingSenderId: Constants.manifest.extra.messagingSenderId,
  //   appId: Constants.manifest.extra.appId,
  //   databaseURL: Constants.manifest.extra.databaseURL,

  //
  apiKey: "AIzaSyAjwGnhZ3Sf4vcddaoCqm1WU8h1Zl2btDc",
  authDomain: "chatapp-d8853.firebaseapp.com",
  projectId: "chatapp-d8853",
  storageBucket: "chatapp-d8853.appspot.com",
  messagingSenderId: "185501872532",
  appId: "1:185501872532:web:c0f24878060ebc31cb5f81",
  // databaseURL,
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
