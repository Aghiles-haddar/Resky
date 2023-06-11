import React from "react";
import Header from "../Components/Header/Header"
import Service from "../Components/Services/Service"
import About from "../Components/About/About"
import Opinion from "../Components/Opinion/Opinion"
import Contact from "../Components/Contact/Contact"

function Home(){
    console.log('test');
    return(
        <div>
            <Header/>
            <Service/>
            <About/>
            <Opinion/>
            <Contact/>
        </div>
    )
}

export default Home