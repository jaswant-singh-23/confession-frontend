import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-container">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01 w-100 ">
            <div className="d-flex justify-content-between">
              <div className="logo-box w-50 ms-5">
                <Link class="navbar-brand" to="/">
                  Confession
                </Link>
              </div>
              <div className="nav-item-box w-50">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item me-3">
                    <a class="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link " aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link " aria-current="page" href="#">
                      Services
                    </a>
                  </li>
                  <li class="nav-item me-3">
                    <a class="nav-link " aria-current="page" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
