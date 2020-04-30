// Declaring variables and dependancies
// =============================================================
const path = require("path");
const express = require("express");
const index = ("./index.js")

let reservations = [];
let waitList = [];

// Sets up the Express App
// =============================================================
const app = express();
let PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation information (DATA)
// =============================================================
app.post("/api/table", function (req, res) {
    var newTable = req.body;
  
    console.log(newTable);
  
    if (reservations.length < 5) {
      reservations.push(newTable);
    } else {
      waitList.push(newTable);
    }
    console.log(reservations)
    res.json(newTable);
  });
  
  // Routes
  // =============================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays tables reserved
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  












