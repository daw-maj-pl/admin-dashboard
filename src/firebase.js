import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'admin-dashboard-cb238.firebaseapp.com',
  projectId: 'admin-dashboard-cb238',
  storageBucket: 'admin-dashboard-cb238.appspot.com',
  messagingSenderId: '379880140885',
  appId: '1:379880140885:web:2c07cf2ec40c9ec53a24dc'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
