const firebaseConfig = {
    apiKey: "AIzaSyAiLoeObJjPvRbubQZjT_tPytO1mgM0iy8",
    authDomain: "kwitter-cfd45.firebaseapp.com",
    databaseURL: "https://kwitter-cfd45-default-rtdb.firebaseio.com",
    projectId: "kwitter-cfd45",
    storageBucket: "kwitter-cfd45.appspot.com",
    messagingSenderId: "666376565063",
    appId: "1:666376565063:web:bf54bc07db3bd11ec99c62"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   function addUser(){
       user_name=document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
           purpose: "adding user"
           
       });
   }