var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req,res){
	var term = req.query.term;
	var url = "http://www.omdbapi.com/?s="+term+"&apikey=thewdb";
	console.log(url);
	request(url, function(error, response, body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			res.render("results", {movies:data});
		}
	});
});

app.listen(3000);