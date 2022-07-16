const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// solicitudes o declaraciones previas

// conectar atlas 
mongoose.connect("mongodb+srv://kevinhe23:Herrekev_30ene.@clustermiapp.hafmi.mongodb.net/MiAppDB", {useNewUrlParser: true});

//Base de datos


//1. Esquema
const usuarioSchema ={
    nombre: String,
    email: String,
    contraseña: String
}

//2. crear el modelo
const Usuario = new mongoose.model("Usuario", usuarioSchema);

//Metodo post

app.post("/registrar", function(req, res){
    //guardar variables
    const usuarioFormulario = req.body.nombres;
    const emailFormulario = req.body.email;
    const contraseñaFormulario = req.body.contraseña;

    //3. Crear documento
    const usuarioDB = new Usuario ({
        nombre: usuarioFormulario,
        email: emailFormulario,
        contraseña: contraseñaFormulario
    });

    //4. subir a la base de datos 
    usuarioDB.save(); 
});

// React utuliza por defecto el puerto 3000, hay que agregar otro puerto
app.listen(5000, function(){
console.log("servidor express funcionando");
})