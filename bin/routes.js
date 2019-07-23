const express = require("express");
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json());

app.get("/", (req, res)=>{
    res.send("Bienvenido a tu App de asesoria");

})

app.get("/users", (req, res) => {

  controller.getUsers(res);
})

app.get("/Gamas", (req, res) => {
  controller.getGamas(res);
})

app.post("/Users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
    res.send('OK')

})
app.post("/Gamas", (req, res)=>{
    //console.log(req.body);
    controller.postGamas(req, res);
    res.send('OK')

})

app.get("/gamas/celulares/:marca",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})


app.get("/gamas/pc/precio/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})

app.get("/App/Gamas/Vel_procesador/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})

app.get("/usuarios/:ID",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})
app.get("/usuario/preferencias/2k/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})
app.get("/Usuario/1233343351/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})
app.get("/Usuario/preferencias/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})
app.get("/App/Gamas/Vel_Procesadores/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})
app.get("/Gamas/pc/Samsung/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})
app.get("/Gamas/celular/Marcas/",(req, res)=>{
    console.log(req.params)
    res.send("ok");
})


exports.app = app;