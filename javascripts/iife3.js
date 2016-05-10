"use strict";
var chatty = (function(chat) {
  var message =  document.getElementById('messageCon').innerHTML;
      //delete the corresponding message in DOM.
  chat.remove =  function removeButton(event) {
      event.target.parentNode.remove(event.parentNode);
      //call method in iife2 to delete from private array.
      //chatty.removeArray(event);
      }
      return chat;
}(chatty || {}));
