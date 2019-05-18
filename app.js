var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var table = [
  {
    name: "",
    phone_number: "",
    email: "",
    uniqueID: ""
  }
];

app.get("/index", function(request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log(PORT);
});
