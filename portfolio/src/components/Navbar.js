import React from "react";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white ">
    <div className="container ">
    <a href="/" className="navbar-brand text-dark font-weight-bold">
    Annanya Vedala
    </a>
    
    <button className="btn btn-outline-info ml-auto mx-3">
    Contact me
    </button>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav">
    <span className="fas fa-bars text-dark"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
    <div className= "navbar-nav">
    <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-1">Blogs</a>
    <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-1">Projects</a>
    </div>
    </div>
    
    </div>
    </nav>
    );
}

export default Navbar;