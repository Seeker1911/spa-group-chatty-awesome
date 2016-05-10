"use strict";
var chatty = (function(string) {
//create private array
  var messages = [];
  string.addMsg = function(userText) {
    messages.push(userText);

//    var toDom = document.getElementById("messageCon");
$('#messageCon').append('<p>' + userText + '<button class="deleteButton">Delete</button>' + '</p>');
//set inner HTML with user text.
//
 // toDom.innerHTML += '<p>' + userText + '<button class="deleteButton">Delete</button>' + '</p>';
    console.log(messages);
  }
  string.getMessagesArray = function() {
    return messages;
  }
//remove item from array if delete button is clicked.
  string.removeArray = function(event){
    var remove =  messages.indexOf(event.srcElement.parentElement.innerText.replace('Delete', ''));
    messages.splice(remove, 1);
    console.log("messages", messages);
  }
   return string;
})(chatty || {});

