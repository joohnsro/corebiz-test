import axios from "axios";

const url = "https://corebiz-test.herokuapp.com/api/v1/products";

const config = {
    baseURL: url,
};

function getProducts() {
    return axios.get(url, config);
}

export {
    getProducts
}