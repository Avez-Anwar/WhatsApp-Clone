import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMdQChKqTsmG58YxaeG-We8FiKy-K9Ins",
  authDomain: "whats-app-clone-f3452.firebaseapp.com",
  databaseURL: "https://whats-app-clone-f3452.firebaseio.com",
  projectId: "whats-app-clone-f3452",
  storageBucket: "whats-app-clone-f3452.appspot.com",
  messagingSenderId: "603403888498",
  appId: "1:603403888498:web:e9b3b1667544961f8c5feb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
