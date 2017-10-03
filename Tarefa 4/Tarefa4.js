const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer({dest: __dirname + '/uploads/'});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',function(req,res){
  console.log("Cookies: ", req.cookies);
  res.sendFile(__dirname + '/index.html');
});

app.get('/formularioget',function(req,res){
  console.log("Cookies: " , req.cookies);
  var usuario = req.query.user;
  var senha = req.query.password;
  res.send("Usuario: "+ usuario + " e Senha: " + senha);
});

app.post('/formulariopost',function(req,res){
  console.log("Cookies: " , req.cookies);
  var usuario = req.body.user;
  var senha = req.body.password;
  res.send("Usuario: "+ usuario + " e Senha: " + senha);
});

app.listen(3000,function(){
  console.log("Usando porta 3000");
});
