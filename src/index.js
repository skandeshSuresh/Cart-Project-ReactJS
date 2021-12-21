import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNf3oiGZuSrFjg14rTDehcTlxvGT2LZv4",
  authDomain: "cart-90e0a.firebaseapp.com",
  projectId: "cart-90e0a",
  storageBucket: "cart-90e0a.appspot.com",
  messagingSenderId: "129401502983",
  appId: "1:129401502983:web:a6c7739ede6940dc9759a2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

