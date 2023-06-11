import React from "react";
import './Contact.css'
import contactMail from "../../Assets/contactMail.svg"
import contactNum from "../../Assets/contactNum.svg"
import contactLocation from "../../Assets/contactLocation.svg"
import imgForm from "../../Assets/imgContact.png"

function Contact(){
    return(
        <div className="container-contact">
            <p className="section-contact">CONTACT</p>
            <h2 className="title-contact">Rester en <br/><span className="title-color">Contact</span> avec <span className="title-color">nous</span></h2>
            
            <div className="list-method-contact">

                <div className="method-contact">
                    <div className="type-contact">
                        <div className="type-contact-img">
                            <img src={contactMail} alt="" />
                        </div>
                        <p>Envoyer nous un<br/><span>Mail</span></p>
                    </div>
                    <div className="info-contact">
                        <p>aghiles.resky@gmail.com</p>
                        <p>dwain.resky@gmail.com</p>
                    </div>
                </div>
                <div className="method-contact">
                    <div className="type-contact">
                           <div className="type-contact-img">
                            <img src={contactNum} alt="" />
                        </div>
                        <p>24/7 <span>Service<br />Appelez nous</span></p>
                    </div>
                    <div className="info-contact">
                        <p>+33 6 32 01 01 93</p>
                        <p>+33 6 10 36 56 06</p>
                    </div>
                </div>
                <div className="method-contact">
                    <div className="type-contact">
                           <div className="type-contact-img">
                            <img src={contactLocation} alt="" />
                        </div>
                        <p>Location<br/><span>Paris</span></p>
                    </div>
                    <div className="info-contact">
                        <p>60 rue François premier</p>
                        <p>75008, Paris</p>
                    </div>
                </div>
            </div>

            <div className="container-form">
                    <div className="form-img">
                        <img src={imgForm} alt="" />
                    </div>
                    <div className="form">
                        <h2 className="title-form">Envoyer nous <span className="title-color">un message</span></h2>
                        <form action="">
                            <input type="text" className="input-name" placeholder="Nom" />
                            <input type="text" className="input-mail" placeholder="Email"/>
                            <input type="text" className="input-tel" placeholder="Téléphone" />
                            <input type="text" className="input-object" placeholder="Object" />
                            <input type="text" className="input-message" placeholder="Message" />
                        </form>
                    </div>
                </div>

        </div>
    )
}
export default Contact