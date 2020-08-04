import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBV2FyPcE8M2p2QaflTV-RLKNun_V07LCI',
  authDomain: 'catsontinder-33669.firebaseapp.com',
  databaseURL: 'https://catsontinder-33669.firebaseio.com',
  projectId: 'catsontinder-33669',
  storageBucket: 'catsontinder-33669.appspot.com',
  messagingSenderId: '584346323130',
  appId: '1:584346323130:web:e080318cd5ea2a69cf5a83',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
