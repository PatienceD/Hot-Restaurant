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

app.get("/reservations", function(request, response) {
  response.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(request, response) {
  response.sendFile(path.join(__dirname, "tables.html"));
});


//---------------------------------------
//AJAX

$("id on submit").on("click", function (event){
  $("#name").val().trim().push(table[0].name)
  $("#phone-number").val().trim().push(table[0].phone_number)
  $("#email").val().trim().push(table[0].email)
  $("#unquie-id").val().trim().push(table[0].uniqueID)
})


app.listen(PORT, function() {
  console.log(PORT);
});
