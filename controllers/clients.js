const Client = require('../models/client')

function index(req, res, next) {
    Client.find({})
        .then(clients => {
            // console.log('i am in the clients index controller', clients)
            res.render('clients/index', { clients, title: 'My Clients' })
        })
        .catch(next)
}


//READ action- show
function show(req, res, next) {
    Client.findById(req.params.id)
    .then(theClient => {
        res.render('clients/show', { theClient, title: 'Client Details' })
    })
    .catch(next)
}

//new 
function newClient(req, res) {
    console.log('the new route has been hit')
    res.render('clients/new')
}

//create
function create(req, res, next) {   
    req.body.user = req.user._id 
    Client.create(req.body)
        .then(() => {
            return res.redirect('/clients')
        })
        .catch(next)
}


module.exports = {
    index,
    newClient,
    create, 
    show
}