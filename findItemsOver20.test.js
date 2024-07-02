function findItemsOver20(products) {
    return products.filter(product => product.qty > 20);
}

function findItemsOver(products, threshold) {
    return products.filter(product => product.qty > threshold);
}