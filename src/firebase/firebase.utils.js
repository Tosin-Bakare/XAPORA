import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9zNZLxBvLVTM-OfS6HWKtyr9NimmH5iw",
    authDomain: "xaporawebsite.firebaseapp.com",
    projectId: "xaporawebsite",
    storageBucket: "xaporawebsite.appspot.com",
    messagingSenderId: "675773883190",
    appId: "1:675773883190:web:16a45372518dd660184997",
    measurementId: "G-1NYQVWK1HE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;