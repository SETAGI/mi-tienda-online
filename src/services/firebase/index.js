import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQ7RWSrVOBO2N8_-lTiJzYc8_2FvYNWbI",
  authDomain: "mi-tienda-online-backend.firebaseapp.com",
  projectId: "mi-tienda-online-backend",
  storageBucket: "mi-tienda-online-backend.appspot.com",
  messagingSenderId: "271009599935",
  appId: "1:271009599935:web:75052bb37b79c5f43d910a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);