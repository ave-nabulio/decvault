import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

// const firebaseConfig = {
//   apiKey: "AIzaSyAzEPIw_eeHpmz1B20Au06jNZkFhI4a7Uo",
//   authDomain: "decvault-a6ce0.firebaseapp.com",
//   projectId: "decvault-a6ce0",
//   storageBucket: "decvault-a6ce0.appspot.com",
//   messagingSenderId: "306709972039",
//   appId: "1:306709972039:web:c3a3a9f8858a3c3c585d62",
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


