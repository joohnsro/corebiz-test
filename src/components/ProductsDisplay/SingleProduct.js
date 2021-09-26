import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../CartContext";
import { CartStorage } from "../../storage";

function SingleProduct(props) {

    const { cart, setCart } = useContext(CartContext);

    const { 
        productName, 
        imageUrl, 
        stars, 
        listPrice, 
        price, 
        installments 
    } = props.data;

    function getFormattedCurrency( value ) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value/100);
    }

    function getItemObs() {
        if ( installments.length == 0 ) return;

        return (
            <p className="item-obs">
                ou em {installments[0].quantity}x de {getFormattedCurrency(installments[0].value)}
            </p>
        );
    }

    const star = (full = false) => {
        return (
            <FontAwesomeIcon
                icon={faStar}
                className={full ? "full" : ""}
            />
        );
    }

    function getRating() {
        let starList = [];

        for( let i = 1; i <= 5; i++ ) {
            starList.push(
                star(i <= stars)
            );
        }

        return starList;
    }

    function handleAddToCart() {
        let quantity = parseInt(cart) + 1;

        try {
            CartStorage.set( quantity );
            setCart( quantity );            
        } catch(e) {}
    }

    return(
        <>
            <div className="item-image">
                <img src={imageUrl} />
            </div>
            <div className="item-description">
                <p className="item-name">{productName}</p>
                <span className="rating">
                    {getRating()}
                </span>
                <p className="item-price">por {getFormattedCurrency( price )}</p>
                {getItemObs()}
                <button 
                    className="buy-button"
                    onClick={handleAddToCart}
                >Comprar</button>
            </div>
        </>
    );
}

export default SingleProduct;