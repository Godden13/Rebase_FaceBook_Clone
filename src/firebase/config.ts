// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeeHprNVqpb-CyMquD6gFsbmOA03myMKQ",
  authDomain: "rebase-facebook-clone-c2910.firebaseapp.com",
  projectId: "rebase-facebook-clone-c2910",
  storageBucket: "rebase-facebook-clone-c2910.appspot.com",
  messagingSenderId: "57896276303",
  appId: "1:57896276303:web:f804e7262ab15ea7c4b53a",
  measurementId: "G-K9Y3GH8VWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

export const initFirebase = () => {
  return app;
};

export const getInfo = getFirestore();
export const storage = getStorage(app);
