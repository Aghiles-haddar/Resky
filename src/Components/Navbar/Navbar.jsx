import React from "react";
import './Navbar.css'
import logo from "../../Assets/logo.png"

function Navbar(){
    return(
        <div className="container-navbar">

            <div className="navbar-identity">
                <img src={logo} alt="" />
                <p>RESKY</p>
            </div>

            <div className="navbar-links">
                <ul>
                    <li className="navbar-link">Accueil</li>
                    <li className="navbar-link">Contact</li>
                    <li className="navbar-link">Services</li>
                    <li className="navbar-link">A propos de nous</li>
                </ul>
            </div>

            <div className="navbar-log">
                <button className="navbar-login">Se connecter</button>
                <button className="navbar-signup">S'inscrire</button>
            </div>
        </div>
    )
}

export default Navbar