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

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth )return;
    const userRef =  firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        }
        catch(error)
        {
            console.log('Error creating user', error.message);

        }
    }

    return userRef;
  }

  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;  
  
  