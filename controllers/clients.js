const Client = require('../models/client')

function index(req, res, next) {
    Client.find({ user: req.user._id })
        .then(clientDocs => {
            console.log('found all the clients\n', clientDocs)
            res.render('clients/index', { clients: clientDocs })
        })
        .catch(next)
}


module.exports = {
    index
}