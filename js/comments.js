
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDDf3j4Y9xEx5owSDnCfk66pUAUUepXJeI",
    authDomain: "constructionsmithinc.firebaseapp.com",
    databaseURL: "https://constructionsmithinc.firebaseio.com",
    projectId: "constructionsmithinc",
    storageBucket: "constructionsmithinc.appspot.com",
    messagingSenderId: "995231546513"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
    var database = firebase.database();

    $("#comment-btn").on("click", function() {
    	event.preventDefault();

    	var author = $("#name-input").val().trim();
    	var comment = $("#comment-input").val().trim();

    	database.ref().push({
    		author: author,
    		comment: comment });

    	console.log(author);
    	console.log(comment);

    	$("#name-input").val("");
    	$("#comment-input").val("");

    	})

    	database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    		console.log(childSnapshot.val());

    		var cs = childSnapshot.val();
    		var author = cs.author;
    		var comment = cs.comment;

    		console.log(author);
    		console.log(comment);

    		$("#comments").append("<div class='clearfix' id='comment-style'> '" + comment + "'</div> By " + author + "<br />" + "<div id='divide'> --------------------------------------------------------------------------- </div>");

    	}, function(errorObject) {
    		console.log("Errors handled: " + errorObject.code);
    	});
