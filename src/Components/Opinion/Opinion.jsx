import React from "react";
import './Opinion.css'
import profilImg from "../../Assets/profil-opinion.png"
import starBlue from "../../Assets/Star 1.png"
import starGrey from "../../Assets/Star 2.png"

function Opinion(){
    return(
        <div className="container-opinion">

            <p className="section-opinion">TEMOIGNAGES</p>
            <h2 className="title-opinion">Nos heureux clients</h2>

            <div className="list-opinion">

                <div className="opinion">
                    <img src={profilImg} alt="" />
                    <div className="opinion-stars">
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starGrey} alt="" />
                    </div>
                    <h3 className="name-opinion">Shamim Hossain</h3>
                    <p className="text-opinion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply </p>
                </div>
                <div className="opinion">
                    <img src={profilImg} alt="" />
                    <div className="opinion-stars">
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starGrey} alt="" />
                    </div>
                    <h3 className="name-opinion">Shamim Hossain</h3>
                    <p className="text-opinion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply </p>
                </div>
                <div className="opinion">
                    <img src={profilImg} alt="" />
                    <div className="opinion-stars">
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starBlue} alt="" />
                        <img src={starGrey} alt="" />
                    </div>
                    <h3 className="name-opinion">Shamim Hossain</h3>
                    <p className="text-opinion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply </p>
                </div>

            </div>

        </div>
    )
}

export default Opinion