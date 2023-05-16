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



module.exports = {
    addCatToCustomer,
}