import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig =  {
    apiKey: "AIzaSyDAaVEF0tFKUQiScf_tatrhvqgivUnsz18",
    authDomain: "crwn-db-dc3f3.firebaseapp.com",
    projectId: "crwn-db-dc3f3",
    storageBucket: "crwn-db-dc3f3.appspot.com",
    messagingSenderId: "18419925403",
    appId: "1:18419925403:web:2a237e843b178552cae13e",
    measurementId: "G-GTESCXFNMT"
  };

  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;  
  
  