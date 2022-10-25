import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDyUeQjx6UMPSbpoDRQ_mbA9enHWl4nQLE",
  authDomain: "ecommerce-basketball.firebaseapp.com",
  projectId: "ecommerce-basketball",
  storageBucket: "ecommerce-basketball.appspot.com",
  messagingSenderId: "444235328076",
  appId: "1:444235328076:web:e3b4efb1e382bae2be62e9",
  measurementId: "G-LGJFZRMQ3T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
