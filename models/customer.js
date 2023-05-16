const mongoose = require('mongoose')

const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const customerSchema = new Schema({
    name: String,
    phone: Number, 
    address: String,
    cats: [catSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Customer', customerSchema)