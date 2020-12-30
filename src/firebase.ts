import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXN_AKhfMFauRAuFz6MZvm4fH7P9WvRXE",
    authDomain: "random-scraper.firebaseapp.com",
    databaseURL: "https://random-scraper.firebaseio.com",
    projectId: "random-scraper",
    storageBucket: "random-scraper.appspot.com",
    messagingSenderId: "117978708417",
    appId: "1:117978708417:web:7862cfc3f7616afece5740",
    measurementId: "G-9H2BQZD5RG"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;