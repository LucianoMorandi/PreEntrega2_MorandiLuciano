import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDF6o_zwPgT8vaUrLrYrhQRgiSWJKKsGz8",
  authDomain: "myecommerce---morandi-luciano.firebaseapp.com",
  projectId: "myecommerce---morandi-luciano",
  storageBucket: "myecommerce---morandi-luciano.appspot.com",
  messagingSenderId: "440415456230",
  appId: "1:440415456230:web:efef38fc8e6674d3d72427"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
