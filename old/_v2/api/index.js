import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDlEohU_Gpx5uZYKQGDDza-JUXikvmtyeM",
  authDomain: "chat-c3a39.firebaseapp.com",
  projectId: "chat-c3a39",
  storageBucket: "chat-c3a39.appspot.com",
  messagingSenderId: "791047339917",
  appId: "1:791047339917:web:03fa91fcc4d6d56c19c7c4",
  measurementId: "G-T45L77349H"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)

export { auth, firestore, storage }
