import firebase from 'firebase'
import config from './firebaseConfig'
//import 'firebase/firestore'


export const FirebaseApp = firebase.initializeApp(config)

