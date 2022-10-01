import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyArBzVLdBmWVgdQCMIogeBKZwJJx4B5uSQ",
  authDomain: "netflix-clone-d2fc0.firebaseapp.com",
  projectId: "netflix-clone-d2fc0",
  storageBucket: "netflix-clone-d2fc0.appspot.com",
  messagingSenderId: "561450393528",
  appId: "1:561450393528:web:c7cdf17c729d6cd2d6b94d"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;