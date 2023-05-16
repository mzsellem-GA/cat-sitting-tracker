const Customer = require('../models/customer')

function index(req, res, next) {
    Customer.find({})
        .then(customerDocs => {
            console.log('found all the clients\n', customerDocs)
            res.render('customers/index', { customers: customerDocs })
        })
        .catch(next)
}
//new
function newCustomer(req, res) {
    res.render('customers/new', { title: 'New Customer'})
}


module.exports = {
    index,
    newCustomer
}