// import firebase from "firebase";
// class FirebaseSvc {
//   constructor() {
//     if (!firebase.apps.length) {
//       //avoid re-initializing
//       firebase.initializeApp({
//         apiKey: "AIzaSyCQMKag5JIb_BQ8-RT0lGb2nowSOLmcWbw",
//         authDomain: "react-native-chat-4e142.firebaseapp.com",
//         databaseURL:
//           "https://react-native-chat-4e142-default-rtdb.firebaseio.com",
//         projectId: "react-native-chat-4e142",
//         storageBucket: "react-native-chat-4e142.appspot.com",
//         messagingSenderId: "736618322083",
//       });
//     }
//   }
//   login = async (user, success_callback, failed_callback) => {
//     await firebase
//       .auth()
//       .signInWithEmailAndPassword(user.email, user.password)
//       .then(success_callback, failed_callback);
//   };
// }
// const firebaseSvc = new FirebaseSvc();
// export default firebaseSvc;
//////////////////////////////////////////////////////////////////////
// import firebase from "firebase/app";
// import "firebase/auth";

// class FirebaseSvc {
//   constructor() {
//     if (!firebase.apps.length) {
//       // avoid re-initializing
//       firebase.initializeApp({
//         apiKey: "AIzaSyCQMKag5JIb_BQ8-RT0lGb2nowSOLmcWbw",
//         authDomain: "react-native-chat-4e142.firebaseapp.com",
//         databaseURL:
//           "https://react-native-chat-4e142-default-rtdb.firebaseio.com",
//         projectId: "react-native-chat-4e142",
//         storageBucket: "react-native-chat-4e142.appspot.com",
//         messagingSenderId: "736618322083",
//       });
//     }
//   }

//   login = async (user, success_callback, failed_callback) => {
//     try {
//       await firebase
//         .auth()
//         .signInWithEmailAndPassword(user.email, user.password);
//       success_callback();
//     } catch (error) {
//       failed_callback(error);
//     }
//   };
// }

// const firebaseSvc = new FirebaseSvc();
// export default firebaseSvc;

///////////////////////////////////////////////////////////////////////////////////

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCQMKag5JIb_BQ8-RT0lGb2nowSOLmcWbw",
//   authDomain: "react-native-chat-4e142.firebaseapp.com",
//   databaseURL: "https://react-native-chat-4e142-default-rtdb.firebaseio.com",
//   projectId: "react-native-chat-4e142",
//   storageBucket: "react-native-chat-4e142.appspot.com",
//   messagingSenderId: "736618322083",
// };

// firebase.initializeApp(firebaseConfig);

// export { firebase };

/////////
// import * as firebase from "firebase/app";
// firebase.initializeApp({
//   apiKey: "AIzaSyCQMKag5JIb_BQ8-RT0lGb2nowSOLmcWbw",
//   authDomain: "react-native-chat-4e142.firebaseapp.com",
//   databaseURL: "https://react-native-chat-4e142-default-rtdb.firebaseio.com",
//   projectId: "react-native-chat-4e142",
//   storageBucket: "react-native-chat-4e142.appspot.com",
//   messagingSenderId: "736618322083",
//   appId: "1:736618322083:web:4a1bb02d6cb6912edec716",
//   measurementId: "G-4RM0TG4XK8",
// });
// export { firebase };

/////////////
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCQMKag5JIb_BQ8-RT0lGb2nowSOLmcWbw",
  authDomain: "react-native-chat-4e142.firebaseapp.com",
  databaseURL: "https://react-native-chat-4e142-default-rtdb.firebaseio.com",
  projectId: "react-native-chat-4e142",
  storageBucket: "react-native-chat-4e142.appspot.com",
  messagingSenderId: "736618322083",
};

// firebase.initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
