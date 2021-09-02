import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYVnqB342cGhN0PhFTjzx-f-7BISypygc",
  authDomain: "extension-ef844.firebaseapp.com",
  projectId: "extension-ef844",
  storageBucket: "extension-ef844.appspot.com",
  messagingSenderId: "153121997173",
  appId: "1:153121997173:web:43b1cbf0d44b809d01933c"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const authService = firebase.auth();
export const dbService = firebase.firestore();