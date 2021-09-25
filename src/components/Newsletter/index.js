import React from 'react';

import "./styles.css";

function Newsletter () {
    return (
        <section id="newsletter">
            <h3>Participe de nossas news com promoções e novidades!</h3>

            <div className="form">
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu email" />
                <button className="newsletter-button">Eu quero!</button>
            </div>
        </section>
    );
}

export default Newsletter;