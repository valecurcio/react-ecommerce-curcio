
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FS_API_KEY,
  authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FS_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
