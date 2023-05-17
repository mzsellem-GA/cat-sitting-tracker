const Customer = require('../models/customer')

function addCatToCustomer(req, res, next) {
    console.log('this is req.body in addcattocustomer', req.body)
    console.log('this is req.params.customerId in addcattocustomer', req.params.customerId)
    Customer.findById(req.params.customerId)
        .then((customer) => {
            customer.cats.push(req.body)
            console.log('the is customer.cats in add cat to customer', customer.cats)
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