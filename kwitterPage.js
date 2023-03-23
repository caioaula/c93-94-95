var firebaseConfig = {
apiKey: "AIzaSyCJr6RUiRASHtcJu1bk0UipJBHSHAlVMLg",
  authDomain: "caioc93-7d3fd.firebaseapp.com",
  databaseURL: "https://caioc93-7d3fd-default-rtdb.firebaseio.com",
  projectId: "caioc93-7d3fd",
  storageBucket: "caioc93-7d3fd.appspot.com",
  messagingSenderId: "543583559348",
  appId: "1:543583559348:web:a7a68a617d2938327041e1",
  measurementId: "G-S4K4HLPM3J"
};
// initialize firebese
firebase.initializeAPP(firebaseconfig);
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function sand()
{
      msg = ducument.getElementById("msg").value
      firebase.database().ref(roomName).push({
      name:userName,
      message:msg,
      like:0
      });
      document.getElementById("nsg").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageDate);
name = messageDate['name'];
message = messageDate['message'];
like  =  messagedate['like'];
nameWithTag = "<h4 " + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
messageWithTag = "<h4> class = 'message_h4'>" + "</h4>";
like_button = "<button class = 'btn btn-warning' id =  " +firebaseMessageId+" value = "+like+" onclick = 'updateLike(this.id)'>";
spanWithTag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " +like+" </span></button><hr>";

row = nameWithTag + messageWithTag +like_button + spanWithTag;
document.getElementById("output").innerHTML += row;


//Fim do código
      } });  }); }
getData();
function updateLike(messageId)
{
      console.log("botão do like pressionado -" + messageId);
      bottonId = messageId;
      likes = document.getElementById(buttonId).value;
      updateLikes = Number(likes) +1;
      console.log(updateLikes)
      firebase.database().ref(roomName).child(messageId).update({
            like:updateLikes
      })

}

function logout()
{
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location.replace("index.html")

}