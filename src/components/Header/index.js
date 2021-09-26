import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './styles.css';
import { CartContext } from "../../CartContext";

function Header() {
    const { cart } = useContext(CartContext);
    
    return (
        <header>
            <img src={logo} className="corebiz-logo" alt="Corebiz Logo" />

            <div className="search-input">
                <input type="text" placeholder="O que está procurando?" />
                <FontAwesomeIcon icon={faSearch} />
            </div>

            <nav className="menu">
                <ul>
                    <li>
                        <button className="my-account">
                            <FontAwesomeIcon icon={faUser} /> Minha conta
                        </button>
                    </li>
                </ul>
                <button className="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>       

            <button className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>{cart}</span>
            </button>     
        </header>
    )
}

export default Header;