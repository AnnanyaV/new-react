import React from "react";
import {Link} from "react-router-dom";
function Footer(){
    return (
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor:"black"}}>
        <div className="row pt-5">
        <div className="col-12 py-3">
        <h2 className="text-light">Connect with me</h2>
        <Link to="/Contact">
        <button className="btn btn-outline-light btn-lg">Let's talk</button>
        </Link>
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-4 py-3">
        <h5 className="text-info">More links</h5>
          <a href="/ProjectSection" className="text-light d-block">Blogs</a>
          <Link to="/" className="text-light d-block">Home</Link>
          <Link to="/Contact" className="text-light d-block">Contact me</Link>
          <a href="/" className="text-light d-block">Write a recommendation<i className="fas fa-heart text-light"></i></a>
        </div>
        <div className="col-12 col-md-4 text-light py-3 text-justify">
        <p>Looking forward to connecting with you. Have any ideas? Feel free to contact me at any time. Working together is what will help us learn and take us the distance.</p>
        </div>
        <div className="col-12 col-md-4 py-3">
        <h5 className="text-info">Social</h5>
        <a href="/"><i className="fab fa-linkedin text-light h1 d-block"></i></a>
        <a href="/"><i className="fab fa-github text-light h1 d-block"></i></a>
        <a href="/"><i className="fab fa-envelope text-light h1 d-block"></i></a>
        </div>
        </div>
        <div className="row">
        <div className="col-12 text-muted">
        <p className="text-light">Copyright Annanya Vedala 2020</p>
        </div>
        </div>
        </div>
        </footer>
    );
}

export default Footer;