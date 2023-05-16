const Customer = require('../models/customer')

function addCatToCustomer(req, res, next) {
    Customer.findById(req.params.customerId)
        .then((customer) => {
            customer.cats.push(req.body)
            return customer.save()
        })
        .then(() => res.redirect(`/customers/${req.params.customerId}`))
        .catch(next)
}

function deleteCatFromCustomer(req, res, next) {
    Customer.findById(req.params.customerId)
        .then(customer => {
            console.log('this is customer in deleteCat', customer)
            customer.cats.id(req.params.catId).deleteOne()
            return customer.save()
        })
        .then(() => res.redirect(`/customers/${req.params.customerId}`))
        .catch(next)
}

module.exports = {
    addCatToCustomer,
    deleteCatFromCustomer
}