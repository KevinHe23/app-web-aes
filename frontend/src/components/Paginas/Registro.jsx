import React from "react";

function Registro() {
    return (

        <div className="container micontenedor">
            <main class="form-signin w-100 m-auto">
                <form>
                    <img classNamme="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal" >Registrese</h1>

                        <div className="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">correo electrónico</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">contraseña</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Recuerdame
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>




        </div>
    );
}

export default Registro;