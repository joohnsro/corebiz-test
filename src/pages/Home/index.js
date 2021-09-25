import React from "react";

import './styles.css';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import ProductsDisplay from "../../components/ProductsDisplay";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <ProductsDisplay />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;