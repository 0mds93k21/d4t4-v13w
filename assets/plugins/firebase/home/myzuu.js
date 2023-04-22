var config = {
    apiKey: "AIzaSyBcMrJywvq9IZfBz5FvfcEBQlEUur5o6GM",
    authDomain: "myzuu-help.firebaseapp.com",
    databaseURL: "https://myzuu-help-default-rtdb.firebaseio.com",
    projectId: "myzuu-help",
    storageBucket: "myzuu-help.appspot.com",
    messagingSenderId: "997562794816",
    appId: "1:997562794816:web:d319134b4f850421a930a5",
    measurementId: "G-THWEXQXCNZ"
  };
  
  firebase.initializeApp(config);
  
  // Create a variable to reference the database.
  var database = firebase.database();
  
  var connectionsRef = database.ref("/view aplikasi");
  var connectedRef = database.ref(".info/connected");
  
  // When the client's connection state changes...
  connectedRef.on("value", function(snap) {
  
    // If they are connected..
    if (snap.val()) {
  
      // Add user to the connections list.
      var con = connectionsRef.push(true);
      // Remove user from the connection list when they disconnect.
      con.onDisconnect().remove();
    }
  });
  
  // When first loaded or when the connections list changes...
  connectionsRef.on("value", function(snap) {
  
    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#watchers-home").text(snap.numChildren());
  });