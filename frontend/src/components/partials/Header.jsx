import React from "react";
import {Link} from "react-router-dom";
function Header(){
    return(
        <header>
            <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li class="nav-item">
            <Link to = "/" class="nav-link active"  aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
            <Link to ="/registro" class="nav-link">Registro</Link>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
        
       






        </header>
    );
}

export default Header;