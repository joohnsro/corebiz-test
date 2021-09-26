import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SingleProduct(props) {

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

        console.log(starList);

        return starList;
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
                <button className="buy-button">Comprar</button>
            </div>
        </>
    );
}

export default SingleProduct;