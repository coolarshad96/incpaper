
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkPuL_cmLkgjxQstQlBuul85MaAzBgnSo",
  authDomain: "incpaper-c6a4c.firebaseapp.com",
  projectId: "incpaper-c6a4c",
  storageBucket: "incpaper-c6a4c.appspot.com",
  messagingSenderId: "208319973065",
  appId: "1:208319973065:web:949e4f89501c1e1decaf18",
  measurementId: "G-500VF69QFE"
};

  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);
  const analytics = getAnalytics(firebase);

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

export const signup = (email, password) => {
    return createUserWithEmailAndPassword(email, password);
  }

export default firebase;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAkPuL_cmLkgjxQstQlBuul85MaAzBgnSo",
//   authDomain: "incpaper-c6a4c.firebaseapp.com",
//   projectId: "incpaper-c6a4c",
//   storageBucket: "incpaper-c6a4c.appspot.com",
//   messagingSenderId: "208319973065",
//   appId: "1:208319973065:web:949e4f89501c1e1decaf18",
//   measurementId: "G-500VF69QFE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);