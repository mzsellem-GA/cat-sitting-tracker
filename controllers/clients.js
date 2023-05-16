const Client = require('../models/client')

function index(req, res, next) {
    Client.find({ user: req.user._id })
        .then(clientDocs => {
            console.log('found all the clients\n', clientDocs)
            res.render('clients/index', { theClients: clientDocs })
        })
        .catch(next)
}
//new
function newClient(req, res) {
    res.render('clients/new', { title: 'New Client'})
}


module.exports = {
    index,
    newClient
}