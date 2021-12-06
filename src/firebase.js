// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCt5DVIiJ-YsyjiHOSwa4Ue5oudYGy2DXo",
	authDomain: "mock-commerce-site.firebaseapp.com",
	projectId: "mock-commerce-site",
	storageBucket: "mock-commerce-site.appspot.com",
	messagingSenderId: "178032224241",
	appId: "1:178032224241:web:a18d3a275a37e5f395c650",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
