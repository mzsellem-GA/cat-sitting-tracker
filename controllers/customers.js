const Customer = require('../models/customer')

function index(req, res, next) {
    Customer.find({user: req.user._id})
        .then(customerDocs => {
            res.render('customers/index', { customers: customerDocs })
        })
        .catch(next)
}

function newCustomer(req, res) {
    res.render('customers/new', { title: 'New Customer'})
}

function create(req, res, next) {  
    req.body.user = req.user._id
    Customer.create(req.body)
        .then((customer) => {
            return res.redirect('/customers')
        })
        .catch(next)
}

function show(req, res, next) {
    Customer.find({user: req.user._id, _id:req.params.id})
    .populate('cats')
    .then(customer => {
        res.render('customers/show', { customer, title: 'Customer Details' })
    })
    .catch(next)
}

function deleteCustomer(req, res, next) {
    Customer.findById({user: req.user._id, _id:req.params.id})
        .then(customer => {
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
    Customer.findById({user: req.user._id, _id:req.params.id})
    .then(customer => {
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