import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a firestore instance
export const db = firebase
    .initializeApp({ 
        apiKey: "AIzaSyBKF-UIFnMM9wzq0q5Qi1Q0Eu5PG5CwwNs",
        authDomain: "exchengario-2d7d4.firebaseapp.com",
        projectId: "exchengario-2d7d4",
        storageBucket: "exchengario-2d7d4.appspot.com",
        messagingSenderId: "416957399332",
        appId: "1:416957399332:web:fa16c939fdbc251af4f3b1"
    })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
