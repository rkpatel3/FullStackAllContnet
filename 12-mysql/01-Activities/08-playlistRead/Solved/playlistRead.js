var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "trilogy",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;

  console.log("connected as id " + connection.threadId);

  queryAllSongs(function () {
    querySongsByGenre("Dance", function () {
      querySongsByGenre("Classic Rock", function () {
        console.log("Goodbye!");
        connection.end();
      });
    });
  });
});

function queryAllSongs(callback) {
  connection.query("SELECT * FROM songs", function(err, res) {
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");

    if (typeof callback === "function") {
      callback();
    }
  });
}

function querySongsByGenre(genre, callback) {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", [ genre ], function(err, res) {
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");

    if (typeof callback === "function") {
      callback();
    }
  });

  // logs the actual query being run
  // console.log(query.sql);
}
