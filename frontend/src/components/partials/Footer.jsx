import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link to="/" class="nav-link px-2 text-muted">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registro" class="nav-link px-2 text-muted">Registro</Link>
                        </li>
                       
                    </ul>
                     <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;