import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeadset } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Footer() {
    return (
        <footer>
            <div className="address">
                <p className="title">Localização</p>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                <p>Alphavile SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>

            <div className="buttons-group">
                <button>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Entre em contato</span>
                </button>
                <button>
                    <FontAwesomeIcon icon={faHeadset} />
                    <span>
                        Fale com o nosso<br />
                        consultor online
                    </span>
                </button>
            </div>

            <div className="logos">
                <div>
                    <span>Created by</span>
                    <img src="corebiz-footer.png" alt="Corebiz Logo" />
                </div>
                <div>
                    <span>Powered by</span>
                    <img src="vtex.png" alt="Vtex Logo" />
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;