// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7n0Tzdk0ufDdtvfiKcv1glKHKwFAAB8s",
    authDomain: "insta-clone-c4498.firebaseapp.com",
    projectId: "insta-clone-c4498",
    storageBucket: "insta-clone-c4498.appspot.com",
    messagingSenderId: "770827494028",
    appId: "1:770827494028:web:cf897a7f0d91afdc4251a9",
    measurementId: "G-C8E8ZS78PW"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };