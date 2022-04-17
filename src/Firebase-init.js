// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDqZbIAmDLAGqZrkMNXtjmkgA3LpJCZr0",
  authDomain: "assignment-10-8fc08.firebaseapp.com",
  projectId: "assignment-10-8fc08",
  storageBucket: "assignment-10-8fc08.appspot.com",
  messagingSenderId: "148277299776",
  appId: "1:148277299776:web:7aa768f7e2b714a0c02da5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
