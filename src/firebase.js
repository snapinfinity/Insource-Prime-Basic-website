
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx-7VqZlpxmFM7cd-Kfpt74uByB5Npknk",
  authDomain: "insourcebanking-c8d38.firebaseapp.com",
  projectId: "insourcebanking-c8d38",
  storageBucket: "insourcebanking-c8d38.firebasestorage.app",
  messagingSenderId: "408173916728",
  appId: "1:408173916728:web:a4315634a447fff3adaccd",
  measurementId: "G-N84PE8FPKC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };