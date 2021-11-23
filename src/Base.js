import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtTv0JTSyxpSShb_nJYI3hY9HEpjht2NU",
    authDomain: "very-hot-burgers-f1e88.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-f1e88-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;