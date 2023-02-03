import firebase from 'firebase/app'
import "firebase/storage"
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6P7GyIBh6T7E3XQ94JKfdRsxdroP31Kw",
    authDomain: "pr-verano.firebaseapp.com",
    projectId: "pr-verano",
    storageBucket: "pr-verano.appspot.com",
    messagingSenderId: "1055740214610",
    appId: "1:1055740214610:web:9a1fa70437f541f0a94e8b"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore();
export const storage = firebase.storage()
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data
    };
  }