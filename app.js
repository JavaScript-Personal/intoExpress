const { NOMEM } = require("dns")
var express = require("express")
var app = express()

app.get("/",function(req,res){
    res.sendFile(__dirname +"/html/index.html")
})

app.get("/sobre",function(req,res){
    res.sendFile(__dirname +"/html/sobre.html")
})

app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send("Ola " +", " +req.params.nome + "<br> seu cargo é: "+ req.params.cargo )
})

app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})