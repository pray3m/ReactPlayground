import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8D333LPphU9r15dCHbIrsXHAgFS-nmic",
    authDomain: "todo-app-8d1c1.firebaseapp.com",
    projectId: "todo-app-8d1c1",
    storageBucket: "todo-app-8d1c1.appspot.com",
    messagingSenderId: "1034829442784",
    appId: "1:1034829442784:web:aff599de6a048bf9886a85"
  };

const app=initializeApp(firebaseConfig);
const db= getFirestore(app);

export {db};