import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCE2dzQYaNH-4D3AEXb4OlR6rDdjRpDf-E",
    authDomain: "disney-clone-629df.firebaseapp.com",
    projectId: "disney-clone-629df",
    storageBucket: "disney-clone-629df.appspot.com",
    messagingSenderId: "424890466373",
    appId: "1:424890466373:web:a7879164a78bbbc9a2632c",
    measurementId: "G-NBP96HK5FK"
  };
  // Initialize Firebase
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth, provider, storage};
export default db;
