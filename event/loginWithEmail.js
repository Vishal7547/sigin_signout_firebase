import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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



document.getElementById('submitLogin').addEventListener('click',function(){
    const emails1=document.getElementById('emailLogin').value
    const passwords1=document.getElementById('PasswordLogin').value 


    signInWithEmailAndPassword(auth,emails1,passwords1).then(() => {
        // Sign-out successful.
        alert("logIn successfully")
      }).catch((error) => {
        // An error happened.
        alert("try again");
      });
})
 
    // console.log(emails,passwords);