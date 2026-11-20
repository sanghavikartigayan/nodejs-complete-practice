const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
    res.render('shop/index', {
        pageTitle: 'Shop Products',
        path: '/products',
        prods: products
    })
    })
}