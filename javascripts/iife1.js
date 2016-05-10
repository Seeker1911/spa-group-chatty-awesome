"use strict";
var chatty = (function(newchatty) {
	function executeThisCodeIfFileFails () {

	}

	function executeThisCodeAfterFileIsLoaded (messageData) {
//		var dataArray = JSON.parse(this.responseText).messages;
//		var messageList = document.getElementById("messageCon");
    let dataArray = messageData.messages;
	  for(var index in dataArray) {
      var messageData = "";
	    var messageObject = dataArray[index];
	    for (var key in messageObject) {
	      var output = messageObject[key];
        newchatty.addMsg(output);
	    }
	  }
	}

  $.ajax({url:'javascripts/main.json'}).done(executeThisCodeAfterFileIsLoaded);

  function jQueryExecute(messageData) {
    let messages = messageData.messages;
  }
//	var myRequest = new XMLHttpRequest();

	//myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
	//myRequest.addEventListener("error", executeThisCodeIfFileFails);

	//myRequest.open("get", "main.json");


	//myRequest.send();
	return newchatty;
})(chatty || {});


