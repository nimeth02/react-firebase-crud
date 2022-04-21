import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyASQTh1mEXh1iNOPk5ru88gnfUfOBpCn7g",
    authDomain: "fir-getstart.firebaseapp.com",
    projectId: "fir-getstart",
    storageBucket: "fir-getstart.appspot.com",
    messagingSenderId: "769100536877",
    appId: "1:769100536877:web:3c3ebf975107fdb9f9eca4",
    measurementId: "G-MEZ4T9B4MX"
  };

  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app)