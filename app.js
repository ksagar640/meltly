var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.render('home');
});

app.get('/ourStory',function(req,res){
	res.render('ourstory');
});

app.get('/catering',function(req,res){
	res.render('catering');
});

app.get('/flavours',function(req,res){
	res.render('flavours');
});

app.get('/gallery',function(req,res){
	res.render('gallery');
});

app.get('/contactUs',function(req,res){
	res.render('contact');
});

app.listen(3000,function(){
	console.log("Listening For Meltly at 3000");
});
