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

//create
function create(req, res, next) {  
    req.body.user = req.user._id 
    Customer.create(req.body)
        .then(() => {
            return res.redirect('/customers')
        })
        .catch(next)
}

//show
function show(req, res, next) {
    Customer.findById(req.params.id)
    .then(customer => {
        res.render('customers/show', { customer, title: 'Customer Details' })
    })
    .catch(next)
}

//delete
function deleteCustomer(req, res, next) {
    Customer.findById(req.params.id)
        .then(customer => {
            if(!customer.user.equals(req.user._id)) throw new Error('Unauthorized')
        
            return customer.deleteOne()
        })
        .then(() => { res.redirect('/customers') })
        .catch(next)
}

function updateCustomerForm(req, res, next) {
    Customer.findById(req.params.id)
    .then(customer => {
        res.render('customers/edit', {
            customer,
            title: 'Customer Edit Detail'
        })
    })
}

function updateCustomer(req, res, next) {
    Customer.findById(req.params.id)
    .then(customer => {
        if(!customer.user.equals(req.user._id)) throw new Error('Unauthorized')
        return customer.updateOne(req.body)
    })
    .then(() => {res.redirect(`/customers/${req.params.id}`)})
    .catch(next)
}

module.exports = {
    index,
    newCustomer,
    create,
    show,
    updateCustomerForm,
    updateCustomer,
    deleteCustomer
}