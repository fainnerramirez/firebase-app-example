import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC28NcShaxvxHBSwKJGxZ8AuOttM_sK93I",
  authDomain: "example-proyect-fainner.firebaseapp.com",
  projectId: "example-proyect-fainner",
  storageBucket: "example-proyect-fainner.appspot.com",
  messagingSenderId: "666652921217",
  appId: "1:666652921217:web:6d70de16cb70e6ac8aac80",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

//Detect state auth

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.info("User logged!");
  } else {
    console.warn("Not User!");
  }
});
