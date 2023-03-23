
const firebaseConfig = {
    apiKey: "AIzaSyCJr6RUiRASHtcJu1bk0UipJBHSHAlVMLg",
    authDomain: "caioc93-7d3fd.firebaseapp.com",
    databaseURL: "https://caioc93-7d3fd-default-rtdb.firebaseio.com",
    projectId: "caioc93-7d3fd",
    storageBucket: "caioc93-7d3fd.appspot.com",
    messagingSenderId: "543583559348",
    appId: "1:543583559348:web:a7a68a617d2938327041e1",
    measurementId: "G-S4K4HLPM3J"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    username = document.getElementById ("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose :"adicionar usuario"
    });

  }