"use strict";
var dark = document.getElementById('darkTheme');
dark.addEventListener("change", theme);

 function theme(){
  console.log("dark Theme");
  document.querySelector("body").classList.toggle("darkTheme");
}

var larger = document.getElementById('largeText');
larger.addEventListener("change", big);

function big(){
  console.log("bigger");
  document.querySelector("body").classList.toggle("largeText");
}

//Event listener for text input. Sends text to addMsg function.
var msgResult = document.getElementById("messageInput");
msgResult.addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		console.log(msgResult.value);
		chatty.addMsg(msgResult.value);
		msgResult.value = "";
	}
});

// Event listener for delete buttons. Removes button with its parent node.
document.querySelector("body").addEventListener("click", function(event) {
	if (event.target.className === "deleteButton") {
	  chatty.remove(event);
	}
});


//Event listener for clear all button. Removes all messages from message container
var clearMessage = document.getElementById("clear");
clearMessage.addEventListener("click", function(event) {
    console.log("click");
  var mess = document.getElementById("messageCon");
  mess.innerHTML = "";
    clearMessage.setAttribute("disabled", true);
});

msgResult.addEventListener("keyup", function() {
        clearMessage.removeAttribute("disabled");
});



