var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// handle to express
var app = express();

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup template engine (initialize)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// establish connection tom ysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "trilogy",
    database: "wishes_db"
});

connection.connect(function (err) {
    if (err) {
        return console.error("error connecting to MySQL", err);
    }

    console.log('Succesfully connected with ID ' + connection.threadId);
});

app.get("/", function (req, res) {
    connection.query("SELECT * FROM wishes", function (err, rows) {
        if (err) {
            console.error("error querying MySQL", err);
        }

        var data = {
            // default to an empty
            wishes: rows || []
        };

        res.render("index", data);
    });
});

app.post("/", function (req, res) {
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [
        req.body.wish
    ], function (err, result) {
        if (err) {
            console.error("error querying MySQL", err);
        }

        console.log('create succesful, addd ID = ' + result.addedId);

        res.redirect("/");
    });
});