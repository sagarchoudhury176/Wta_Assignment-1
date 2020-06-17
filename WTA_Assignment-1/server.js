// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// MongoDB

const dbUrl =
  "mongodb+srv://123456:Q1W2E3R4T5Y6@cluster0.7r78k.mongodb.net/admin?retryWrites=true&w=majority";
mongoose.connect(dbUrl);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});
//mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/products-demo');
// mongoose.connection.on('error', function(){});

// Express
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes/api"));

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port, ip, function () {
  console.log("Express server listening on %d", port);
});
