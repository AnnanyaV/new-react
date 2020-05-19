import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white ">
    <div className="container ">
    <Link to="/" className="navbar-brand text-dark font-weight-bold">
    Annanya Vedala
    </Link>
    <Link to="/Contact" className="ml-auto mx-3">
    <button className="btn btn-outline-info">
    Contact me
    </button>
    </Link>
    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav">
    <span className="fas fa-bars text-dark"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
    <div className= "navbar-nav">
    <Link to="/ProjectSection" className="nav-item nav-link text-dark font-weight-bold mx-1">Blogs</Link>
    
    </div>
    </div>
    
    </div>
    </nav>
    );
}

export default Navbar;