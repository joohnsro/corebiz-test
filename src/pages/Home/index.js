import React, { useMemo, useEffect, useState } from "react";

import './styles.css';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import ProductsDisplay from "../../components/ProductsDisplay";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

import { CartContext } from "../../CartContext";
import { CartStorage } from "../../storage";


function Home() {
    const [cart, setCart] = useState(0);

    const providerCart = useMemo(() => ({cart, setCart}), [cart, setCart]);

    useEffect(() => {
        let storage = 0;

        try {
            storage = CartStorage.get();
            
            if ( storage ) {
                setCart( storage );
            } else {
                CartStorage.set(0);
            }
        } catch(e) {}        
    }, []);

    return (        
        <CartContext.Provider value={providerCart}>
            <Header />
            <Slider />
            <ProductsDisplay />
            <Newsletter />
            <Footer />
        </CartContext.Provider>
    )
}

export default Home;