import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import * as ProductsApi from "../../api/ProductsApi";
import SingleProduct from "./SingleProduct.js";

function ProductsDisplay () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductsApi.getProducts().then(({data}) => {
            setProducts(data);
        });
    }, []);

    return (
        <section className="products-display">
            <h2>Mais Vendidos</h2>

            <ul className="item-list">

                {products.map(item => (
                    <li className="item" key={item.productId}>
                        <SingleProduct data={item} />
                    </li>
                ))}

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