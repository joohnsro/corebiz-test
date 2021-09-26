import axios from "axios";

const url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

const config = {
    baseURL: url,
};

function addToNewsletter(data) {
    return axios.post(url, data, config);
}

export {
    addToNewsletter
}