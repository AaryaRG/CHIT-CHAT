
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDa8p0u3oaI2Unnw5Mst4dgPwbd5phxgeQ",
  authDomain: "kwitter-120d9.firebaseapp.com",
  databaseURL: "https://kwitter-120d9-default-rtdb.firebaseio.com",
  projectId: "kwitter-120d9",
  storageBucket: "kwitter-120d9.appspot.com",
  messagingSenderId: "804381593312",
  appId: "1:804381593312:web:868df8aab6f439c0140a85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


