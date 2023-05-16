const Customer = require('../models/customer')

function index(req, res, next) {
    Customer.find({})
        .then(customers => {
            res.render('customers/index', { customers, title: 'My Customers' })
        })
        .catch(next)
}


//READ action- show
function show(req, res, next) {
    Customer.findById(req.params.id)
    .then(customer => {
        res.render('customers/show', { customer, title: 'Customer Details' })
    })
    .catch(next)
}

//new 
function newCustomer(req, res) {
    console.log('the new route has been hit')
    res.render('customers/new', { title: 'New Customer'})
}

//create
// function create(req, res, next) {   
//     // req.body.user = req.user._id 
//     Customer.create(req.body)
//         .then(() => {
//             return res.redirect('/customers')
//         })
//         .catch(next)
// }

//delete
// function deleteCustomer(req, res, next) {
//     Customer.findById(req.params.id)
//         .then(customer => {
//             return customer.deleteOne()
//         })
//         .then(() => {
//             res.redirect('/customers')
//         })
//         .catch(next)
// }


module.exports = {
    index,
    newCustomer,
    // create, 
    show,
    // deleteCustomer
}