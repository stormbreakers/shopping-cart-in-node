var User = require('../models/User');
var path = require('path');

module.exports = function (app) {
    // application -------------------------------------------------------------

    //default route index page
    app.get('/', function (req, res) {
        res.sendFile('app/views/index.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/Cart', function (req, res) {
        res.sendFile('app/views/partial/cart.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/Shop', function (req, res) {
        res.sendFile('app/views/partial/shop.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/Checkout', function (req, res) {
        res.sendFile('app/views/partial/checkout.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/Product', function (req, res) {
        res.sendFile('app/views/partial/single-product.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/menu', function (req, res) {
        res.sendFile('app/views/partial/menu.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/footer', function (req, res) {
        res.sendFile('app/views/partial/footer.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('/main', function (req, res) {
        res.sendFile('app/views/partial/main.html', { root: path.join(__dirname, '../../') }); // load the single view file (angular will handle the page changes on the front-end)
    });

    //app.post('/api/login', function (req, res) {
    //    var query = Model.find({email: req.body.email}, function (err, rows) {
    //        if (err) {
    //            res.send(err);
    //        }
    //        console.log(rows);
    //        res.json(rows); // return all todos in JSON format
    //    });
    //});
};