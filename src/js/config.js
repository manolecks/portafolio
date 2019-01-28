import firebase from 'firebase/app'

const config ={
  apiKey: "AIzaSyCG13jUum2UBm4JcS0QUs4LR8BFlQuxRXk",
  authDomain: "portafolio-bd4e7.firebaseapp.com",
  databaseURL: "https://portafolio-bd4e7.firebaseio.com",
  projectId: "portafolio-bd4e7",
  storageBucket: "portafolio-bd4e7.appspot.com",
  messagingSenderId: "331005976234"
};


const init = () => firebase.initializeApp(config);
init()
