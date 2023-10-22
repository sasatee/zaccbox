
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"





const firebaseConfig = {
    apiKey: "AIzaSyDZ3W0B4EKil1UHU26ji3X3XXCuEJmK0JA",
    authDomain: "tutorial-signin-ce9d4.firebaseapp.com",
    projectId: "tutorial-signin-ce9d4",
    storageBucket: "tutorial-signin-ce9d4.appspot.com",
    messagingSenderId: "714082972379",
    appId: "1:714082972379:web:58e0021dbd26f3a4a352fe"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



//IOS
//745932678832-j54tv0dmrp1g4e2n5166hkjf9n6lv7q0.apps.googleusercontent.com

//Android
//745932678832-rguukkn19u8ti566rvc3ln8pe21e150i.apps.googleusercontent.com