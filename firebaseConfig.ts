import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'checkin--checkout.firebaseapp.com',
  databaseURL: 'https://checkin--checkout-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'checkin--checkout',
  storageBucket: 'checkin--checkout.appspot.com',
  messagingSenderId: '358727192477',
  appId: '1:358727192477:web:a4c414158d912ad807e974'
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
