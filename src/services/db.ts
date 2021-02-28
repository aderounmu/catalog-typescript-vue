import { FirebaseApp } from './firebaseInit'
export const db = FirebaseApp.firestore();

export const storage = FirebaseApp.storage().ref()

