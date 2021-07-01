import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config =  {
    apiKey: "AIzaSyAebDLs_xY8H7GN1-FAsR5PnsU943PzLT0",
    authDomain: "clothing-commerce-db.firebaseapp.com",
    projectId: "clothing-commerce-db",
    storageBucket: "clothing-commerce-db.appspot.com",
    messagingSenderId: "735037083659",
    appId: "1:735037083659:web:2dc6b2499ac1e344a9770e",
    measurementId: "G-0W4Z5FWDLM"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating the user.");
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;