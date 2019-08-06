const express = require("express");
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json());

app.get("/", (req, res)=>{
    res.send("Bienvenido a tu App de asesoria");

})

app.put("/usuarios/:id", function(req, res) {
    let usuarios = req.body.usuarios;
    usuarios.id = req.params.id;
    controller.updateUsuarios(usuarios, res);
});

app.post("/usuarios", function(req, res) {
    let { usuarios } = req.body;
    controller.setUsuarios(usuarios, res);
});

app.get("/usuarios/:id", function(req, res) {
    let { id } = req.params;
    controller.getUsuario(id, res);
});


app.get("/users", (req, res) => {

  controller.getUsers(res);
})

app.delete("/usuarios/:id", function(req, res) {
    let { id } = req.params;
    controller.deleteUsuarios(id, res);
});

app.get("/Usuarios", (req, res) => {

  controller.getUsuarios(res);
})
app.get("/Celulares", (req, res) => {

  controller.getCelulares(res);
})

app.get("/Gamas", (req, res) => {
  controller.getGamas(res);
})

app.get("/Preferencias", (req, res) => {
  controller.getPreferencias(res);
})

app.get("/Pcs", (req, res) => {
  controller.getPcs(res);
})
////////////////////////////////////////////////
app.post("/Users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
    res.send('OK')

})
app.post("/Usuarios", (req, res)=>{
    //console.log(req.body);
    controller.postUsuarios(req, res);
    res.send('OK')

})

app.post("/Celulares", (req, res)=>{
    //console.log(req.body);
    controller.postCelulares(req, res);
    res.send('OK')

})

app.post("/Pcs", (req, res)=>{
    //console.log(req.body);
    controller.postPcs(req, res);
    res.send('OK')

})

app.post("/Gamas", (req, res)=>{
    //console.log(req.body);
    controller.postGamas(req, res);
    res.send('OK')

})

app.post("/Preferencias", (req, res)=>{
    //console.log(req.body);
    controller.postPreferencias(req, res);
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