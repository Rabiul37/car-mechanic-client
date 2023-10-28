// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB28nGrenN_o5Iy_9DkLSfgi0j2TliVGV8",
  authDomain: "carrer-hub-2e01b.firebaseapp.com",
  projectId: "carrer-hub-2e01b",
  storageBucket: "carrer-hub-2e01b.appspot.com",
  messagingSenderId: "791356740439",
  appId: "1:791356740439:web:9ec09cdc68353c0d07a412",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
