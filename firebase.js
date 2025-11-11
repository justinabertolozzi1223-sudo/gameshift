import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTqdN4d6G2tgX1E-hGWPRayhQV2L7RJIk",
  authDomain: "gameshift-401ac.firebaseapp.com",
  projectId: "gameshift-401ac",
  storageBucket: "gameshift-401ac.firebasestorage.app",
  messagingSenderId: "744169336215",
  appId: "1:744169336215:web:9619924fb2999fc803e8d2",
  measurementId: "G-R77EFFLQX4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();