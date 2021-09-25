import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import logo from './logo.svg';
import './styles.css';

function Header() {
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
                    <li>
                        <button className="cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span>1</span>
                        </button>
                    </li>
                </ul>
            </nav>            
        </header>
    )
}

export default Header;