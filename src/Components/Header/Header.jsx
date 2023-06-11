import React from "react";
import "./Header.css"
import imgHeader from "../../Assets/img-header.png"

function Header(){
    return(
        <div className="container-header">

            <div className="header-info">
                <h1 className="title-header">Agence de Developpement Web sur mesure</h1>
                <p className="header-text">
                    Notre but est de vous créer un site web à la hauteur de vos 
                    espérances pour vous laner dans le numérique.
                </p>
                <button className="header-button">Commencer</button>
            </div>

            <div className="header-img">
                <img src={imgHeader} alt="" />
            </div>
        </div>
    )
}

export default Header