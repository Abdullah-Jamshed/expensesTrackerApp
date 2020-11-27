import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCextW97X5x7D8fb9XkvnPS_FVxeF_7jLw",
  authDomain: "expensetrackerapp-6e9d8.firebaseapp.com",
  databaseURL: "https://expensetrackerapp-6e9d8.firebaseio.com",
  projectId: "expensetrackerapp-6e9d8",
  storageBucket: "expensetrackerapp-6e9d8.appspot.com",
  messagingSenderId: "664552675721",
  appId: "1:664552675721:web:081d699f7fe602ec096958",
  measurementId: "G-F2Z7G1XQWM",
};
// // Initialize Firebase


export default firebase.initializeApp(firebaseConfig) 
