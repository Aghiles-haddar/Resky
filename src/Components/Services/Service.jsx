import React from "react";
import './Service.css'
import serviceUi from "../../Assets/service-ui.png"
import serviceConcept from "../../Assets/service-concept.png"
import serviceDev from "../../Assets/service-dev.png"

function Service(){
    return(
        <div className="container-services">
            <p className="section-services">SERVICE</p>
            <h2 className="title-services">Nos Service & Nos Buts</h2>

            <div className="list-services">
                <div className="service">
                    <img src={serviceUi} alt="" />
                    <p className="title-service">UX/UI Design</p>
                    <ul>
                        <li className="detail-service">Design de website</li>
                        <li className="detail-service">Design d'application</li>
                        <li className="detail-service">Tests utilisateurs</li>
                        <li className="detail-service">Hiérarchie visuelle</li>
                        <li className="detail-service">Architecture de l'information</li>
                        <li className="detail-service">Recherche utilisateur</li>
                    </ul>
                    <button className="btn-service">Learn More</button>
                </div>
                <div className="service">
                    <img src={serviceConcept} alt="" />
                    <p className="title-service">Conception de site/app</p>
                    <ul>
                        <li className="detail-service">Maquette wireframe</li>
                        <li className="detail-service">Responsive design</li>
                        <li className="detail-service">Navigation intuitive</li>
                        <li className="detail-service">Contenu visuel attrayant</li>
                    </ul>
                    <button className="btn-service">Learn More</button>
                </div>
                <div className="service">
                    <img src={serviceDev} alt="" />
                    <p className="title-service">Développement</p>
                    <ul>
                        <li className="detail-service">Langages de programmation</li>
                        <li className="detail-service">Développement Front-end</li>
                        <li className="detail-service">Développement Back-end</li>
                    </ul>
                    <button className="btn-service">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Service