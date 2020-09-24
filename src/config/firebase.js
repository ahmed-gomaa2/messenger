import firebase from 'firebase'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvkbzdHL7YO_rHaR8PaIaQZl4beS1x4pc",
    authDomain: "messenger-46ce5.firebaseapp.com",
    databaseURL: "https://messenger-46ce5.firebaseio.com",
    projectId: "messenger-46ce5",
    storageBucket: "messenger-46ce5.appspot.com",
    messagingSenderId: "110400472957",
    appId: "1:110400472957:web:3994b95e57cd52a13b2e14",
    measurementId: "G-6QWWVCSHSL"
};


firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase;
