import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import sapato from "./sapato.png";

function ProductsDisplay () {
    return (
        <section className="products-display">
            <h2>Mais Vendidos</h2>

            <ul className="item-list">
                <li className="item">
                    <div className="item-image">
                        <img src={sapato} />
                    </div>
                    <div className="item-description">
                        <p className="item-name">Sapato floater preto</p>
                        <span className="rating">
                            <FontAwesomeIcon icon={faStar} className="full" />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p className="item-price">por R$ 259,90</p>
                        <p className="item-obs">ou em 9x de R$ 28,87</p>
                        <button className="buy-button">Comprar</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item-image">
                        <img src={sapato} />
                        <span className="off" style={{backgroundImage: "url(polygon.png)"}}>
                            OFF
                        </span>
                    </div>
                    <div className="item-description">
                        <p className="item-name">Sapato floater preto</p>
                        <span className="rating">
                            <FontAwesomeIcon icon={faStar} className="full" />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p className="item-price">por R$ 259,90</p>
                        <p className="item-obs">ou em 9x de R$ 28,87</p>
                        <button className="buy-button">Comprar</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item-image">
                        <img src={sapato} />
                    </div>
                    <div className="item-description">
                        <p className="item-name">Sapato floater preto</p>
                        <span className="rating">
                            <FontAwesomeIcon icon={faStar} className="full" />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p className="item-price">por R$ 259,90</p>
                        <p className="item-obs">ou em 9x de R$ 28,87</p>
                        <button className="buy-button">Comprar</button>
                    </div>
                </li>

                <li className="item">
                    <div className="item-image">
                        <img src={sapato} />
                    </div>
                    <div className="item-description">
                        <p className="item-name">Sapato floater preto</p>
                        <span className="rating">
                            <FontAwesomeIcon icon={faStar} className="full" />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <p className="item-price">por R$ 259,90</p>
                        <p className="item-obs">ou em 9x de R$ 28,87</p>
                        <button className="buy-button">Comprar</button>
                    </div>
                </li>
            </ul>

            <div className="left-control">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>

            <div className="right-control">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>

            <ul className="products-navigation">
                <li><a href="#" className="active"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </section>
    );
}

export default ProductsDisplay;