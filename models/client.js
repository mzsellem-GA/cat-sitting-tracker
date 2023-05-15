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

const clientSchema = new Schema({
    name: String,
    phone: Number, 
    address: String,
    cats: [catSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Client', clientSchema)