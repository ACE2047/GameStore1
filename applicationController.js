var ApplicationModel = require('./applicationModel');
applicationModel = new ApplicationModel();

class application {
    
    getAllProds() {
        return applicationModel.getAllProds();
    }

    getAllFilters() {
        return applicationModel.getAllFilters();
    }

    getProdById(id) {
        return applicationModel.getProdById(id);
    }

    getProdsByFilter(filter) {
        return applicationModel.getProdsByFilter(filter);
    }

    getProductsBySearch(search) {
        return applicationModel.getProductsBySearch(search);
    }
    getCart() {
        return applicationModel.getCart();
    }

    addToCart(productId) {
        return applicationModel.addToCart(productId);
    }

    removeFromCart(productId) {
        return applicationModel.removeFromCart(productId);
    }
}



module.exports = application; 