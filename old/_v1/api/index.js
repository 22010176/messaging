import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// createUserWithEmailAndPassword(auth, "cdcdeec90@gmail.com", "Testeee").then(user => {
//   const user_ = user.user;
//   console.log(user_);
// }).catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log({ errorCode, errorMessage })
//   // ..
// });
console.log(firestore, auth)

export { auth, firestore }
// console.log("good")