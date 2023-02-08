import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB11dSIQVCG0GswQzKtWJvYqYc38hRFVOA",
    authDomain: "login-623b8.firebaseapp.com",
    projectId: "login-623b8",
    storageBucket: "login-623b8.appspot.com",
    messagingSenderId: "304126351049",
    appId: "1:304126351049:web:d3f8408ad6547028401f18"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



document.getElementById('submit').addEventListener('click',function(){
    const emails=document.getElementById('email').value
    const passwords=document.getElementById('Password').value 


    createUserWithEmailAndPassword(auth, emails, passwords)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
           alert("your account is created")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("something wrong!! please try again")
            // ..
        });
})
 
    // console.log(emails,passwords);