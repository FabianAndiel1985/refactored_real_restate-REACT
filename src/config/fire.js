import firebase from 'firebase';

  let config = {
    apiKey: "AIzaSyBKyipOjnfBMMAS3Y-CffRMEH7_WwlZn5o",
    authDomain: "realestate-ec9a6.firebaseapp.com",
    databaseURL: "https://realestate-ec9a6.firebaseio.com",
    projectId: "realestate-ec9a6",
    storageBucket: "realestate-ec9a6.appspot.com",
    messagingSenderId: "152710295514",
    appId: "1:152710295514:web:6942d4728ba4aadbc19ae3"
  };

  const fire = firebase.initializeApp(config);

  export default fire;


