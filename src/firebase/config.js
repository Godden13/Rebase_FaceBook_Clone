// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4uWiJG48zPwzmVzj2WgD8t5Hl0UpurV8",
  authDomain: "facebook-clone-95322.firebaseapp.com",
  projectId: "facebook-clone-95322",
  storageBucket: "facebook-clone-95322.appspot.com",
  messagingSenderId: "458870374836",
  appId: "1:458870374836:web:bb5c790e8fec1fc470b2e1",
  measurementId: "G-V7M3LN8FP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;