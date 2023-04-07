// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl-zofx2bRxpsvlTAQkyMiXBiEyDLEU5I",
  authDomain: "netflix-clone-544e3.firebaseapp.com",
  projectId: "netflix-clone-544e3",
  storageBucket: "netflix-clone-544e3.appspot.com",
  messagingSenderId: "954042273211",
  appId: "1:954042273211:web:8f59680721866c3785089e",
  measurementId: "G-HZY9PSV1H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
