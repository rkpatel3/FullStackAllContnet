var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the express.static middleware to serve static content 
// for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
  // first, we need to go to the database and get our data!
  connection.query('SELECT * FROM quotes', function (err, data) {
    if (err) {
      // If there was an error querying the DB, send a 500 Internal Server Error
      res.status(500).end();
    }

    // This route will serve HTML, not JSON - but that HTML will be
    // generated by handlebars
    // Index is the route that shows "all" data
    res.render('index', {
      // "quotes" is the name of the property we expect in our templates
      quotes: data
    });
  });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {
  // first, we need to go to the database and get our data!
  connection.query('SELECT * FROM quotes WHERE id = ? ', [ req.params.id ], function (err, rows) {
    if (err) {
      res.status(500).end();
    }

    if (data && data.length === 1) {
      var data = rows[0];
      res.render('single-quote', data);
    } else {
      // we found too many matches or no matches at all
      res.status(500).end();
    }
  });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {

});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {

});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
