import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/login", {
      replace: true,
    });
  };
  const Signup = () => {
    navigate("/registro", {
      replace: true,
    });
  };

  return (
    <header>
      <div class="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            aria-current="page"
          >
            <span className="fs-4">Banco Nacional de Honduras</span>
          </Link>
          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-primary me-2" onClick={Login}>
              Login
            </button>
            <button type="button" class="btn btn-primary me-2" onClick={Signup}>
              Sign-up
            </button>
          </div>
        </header>
      </div>
    </header>
  );
}

export default Header;
