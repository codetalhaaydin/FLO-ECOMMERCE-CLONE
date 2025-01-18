// firebaseConfig.ts (veya firebase.ts olarak adlandırabilirsiniz)
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOSq6Bsosrmk_KCBNojyWtmuaDTk7sqAQ",
  authDomain: "web-floproje.firebaseapp.com",
  databaseURL: "https://web-floproje-default-rtdb.firebaseio.com",
  projectId: "web-floproje",
  storageBucket: "web-floproje.appspot.com",
  messagingSenderId: "968149123455",
  appId: "1:968149123455:web:c76258b2581da286fd1a4a"
};

export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;