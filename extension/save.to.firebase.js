// source
// Firebase console > Settings >  Project Settings > Apps Card > Nickname >  Firebase SDK snippet > Config
// Click on "Config" radio button
// Copy the config object snippet
// Paste it here
const firebaseConfig = {
  apiKey: "AIzaSyDZ-jO-u6P6RF2gUZ6OeUT97nTvMDBtlCM",
  authDomain: "charlesaugustusmagnussen-cf42a.firebaseapp.com",
  databaseURL: "https://charlesaugustusmagnussen-cf42a.firebaseio.com",
  projectId: "charlesaugustusmagnussen-cf42a",
  storageBucket: "charlesaugustusmagnussen-cf42a.appspot.com",
  messagingSenderId: "731035422836",
  appId: "1:731035422836:web:f93a26c717642bf1b08121",
  measurementId: "G-1ERH5HQQJ7"
};

// Initialize Firebase
const CAM = firebase.initializeApp(firebaseConfig);
console.log('Project Initialed, Project Name:', CAM.name);  // "[CAM]"

// Access Firebase services via the Project variable
var CAMFirestore = CAM.firestore();

console.log('Project storage', CAMFirestore);
