  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateEmail ,onAuthStateChanged,updateProfile } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAk1_0pAZgRuzcjgPjcP7QIjMTW437Rc6Y",
    authDomain: "quiz-app-109.firebaseapp.com",
    projectId: "quiz-app-109",
    storageBucket: "quiz-app-109.appspot.com",
    messagingSenderId: "129997380706",
    appId: "1:129997380706:web:ed662af32be71b82f5c53b"
  };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    let btn=document.querySelector("button")
    console.log(btn)

    createUserWithEmailAndPassword(auth, "maaz@gmail.com", "password")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User",user)
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });

signInWithEmailAndPassword(auth, "maaz@gmail.com", "password")
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User",user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error msg" ,errorMessage)
    console.log("error code" ,errorCode)
  });

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log("user",user)
//     } else {
//         console.log("User is not signed in")

//     }
//   });
//   const myAuth=getAuth()


// btn.addEventListener("click",function() {

//     updateEmail(myAuth.currentUser, "maaz70724@gmail.com").then(() => {
//       console.log("Email updated successfully",myAuth.currentUser)
  
//     }).catch((error) => {
//       console.log(error)
     
//     });
//   })
  