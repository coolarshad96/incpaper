import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAkPuL_cmLkgjxQstQlBuul85MaAzBgnSo",
    authDomain: "incpaper-c6a4c.firebaseapp.com",
    projectId: "incpaper-c6a4c",
    storageBucket: "incpaper-c6a4c.appspot.com",
    messagingSenderId: "208319973065",
    appId: "1:208319973065:web:949e4f89501c1e1decaf18",
    measurementId: "G-500VF69QFE"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
