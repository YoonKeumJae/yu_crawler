// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwByXRU0MmUkyy8-R0UCCDAxvyLHfNDRw",
  authDomain: "yucrawler.firebaseapp.com",
  projectId: "yucrawler",
  storageBucket: "yucrawler.appspot.com",
  messagingSenderId: "359650333678",
  appId: "1:359650333678:web:442a480f50c84cba9734ff",
  measurementId: "G-S1XXCWLF4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
