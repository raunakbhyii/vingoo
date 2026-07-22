// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-b5063.firebaseapp.com",
  projectId: "vingo-food-delivery-b5063",
  storageBucket: "vingo-food-delivery-b5063.firebasestorage.app",
  messagingSenderId: "1089493795463",
  appId: "1:1089493795463:web:de8f33797154d86559ae22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export{app,auth} 