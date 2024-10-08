var path = require('path');
var express = require('express');
var router = express.Router();

var applicationController = require('../application/applicationController');


router.get('/product', function(req, res, next) {
    var appController = new applicationController();
    let data;

    if (req.query.filter)
        data = appController.getProdsByFilter(req.query.filter);
    else if (req.query.search)
        data = appController.getProductsBySearch(req.query.search);
    else
        data = appController.getAllProds();

    res.send(data);
});

router.get('/product/filters', function(req, res, next) {
    var appController = new applicationController();
    let data;
    data = appController.getAllFilters();
    res.send(data);
});

router.get('/product/:productId', function(req, res, next) {
    var appController = new applicationController();
    let data;
    console.log(req.params.productId);
    data = appController.getProdById(req.params.productId);
    res.send(data);
});

// Cart routes

router.get('/cart/:productId', function(req, res, next) {
    var appController = new applicationController();
    let cartData = appController.getCart();
    res.json(cartData); // Send the cart data as JSON
});

router.post('/cart/:productId', function(req, res, next) {
    var appController = new applicationController();
    let productId = req.params.productId;
    let updatedCartData = appController.addToCart(productId);
    res.json(updatedCartData); // Send the updated cart data as JSON
});

router.delete('/cart/:productId', function(req, res, next) {
    var appController = new applicationController();
    let productId = req.params.productId;
    let updatedCartData = appController.removeFromCart(productId);
    res.json(updatedCartData);
});
module.exports = router; 