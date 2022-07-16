import { useState } from "react";
import React from "react";
import axios from "axios"

function Registro() {
    //declaracion objeto inicial
    const [input, setInput] = useState({
        nombres: "",
        email: "",
        contraseña: ""
    });
    //Cambia el valor por el que escribe el usuario
    function handleChange(event) {
        console.log(input);
        const { name, value } = event.target;
        //Guarda el valor previo
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }
    //se activa cuando se oprime el boton
    function handleClick(event) {
        // evita el parpadeo predeterminado
        event.preventDefault();

        //crea objeto para pasar al servidor
        const nUsuario = {
            nombres: input.nombres,
            email: input.email,
            contraseña: input.contraseña
        }

        //pasar datos a servidor o bd
        axios.post("/registrar", nUsuario)
    }


    return (

        <div className="container micontenedor">
            <main class="form-signin w-100 m-auto">
                <form>

                    <h1 className="h3 mb-3 fw-normal" >Por favor, registrese</h1>
                    <div className="form-floating">
                        <input
                            onChange={handleChange}
                            name="nombres"
                            value={input.name}
                            type="text"
                            class="form-control"
                            id="floatingName"
                            placeholder="Nombre completo" />
                        <label for="floatingInput">Nombre completo</label>
                    </div>

                    <div className="form-floating">
                        <input
                            onChange={handleChange}
                            name="email"
                            value={input.email}
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com" />
                        <label for="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input
                            onChange={handleChange}
                            name="contraseña"
                            value={input.contraseña}
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>

                    <button onClick={handleClick} className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>

                </form>
            </main>




        </div>
    );
}

export default Registro;