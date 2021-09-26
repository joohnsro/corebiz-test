const storageName = '@corebiz-test/cart';

function get() {
    return localStorage.getItem(storageName);
}

function set(value) {
    localStorage.setItem(storageName, value);
}

export const CartStorage = {
    get,
    set
}