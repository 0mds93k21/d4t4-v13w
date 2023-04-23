var config = {
  apiKey: "AIzaSyCEliugQ19EDDcFKQnJCK7xUWtqBEWCnQo",
  authDomain: "myzuu-view.firebaseapp.com",
  databaseURL: "https://myzuu-view-default-rtdb.firebaseio.com",
  projectId: "myzuu-view",
  storageBucket: "myzuu-view.appspot.com",
  messagingSenderId: "79139842519",
  appId: "1:79139842519:web:0a77efc456a6fc9bf50392",
  measurementId: "G-5P5Y0N9T9Y"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

var connectionsRef = database.ref("/view profile");
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function (snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function (snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#watchers-profile").text(snap.numChildren());
});