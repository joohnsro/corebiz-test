import React from "react";

import "./styles.css";

function Slider () {
    return (
        <section className="slider-container">
            <ul className="slider">
                <li style={{backgroundImage: "url(slider/slider-1.png)"}}>
                    <div 
                        className="description"  
                        style={{backgroundImage: "url(slider/mask.png)"}}
                    >
                        <div className="description-content">
                            <p>Olá, o que você está buscando?</p>
                            <h1>Criar ou migrar seu<br />e-commerce?</h1>
                        </div>
                    </div>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul className="slider-navigation">
                <li><a href="#" className="active"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </section>
    );
}

export default Slider;