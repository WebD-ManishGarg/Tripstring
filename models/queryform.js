var mongoose = require('mongoose')
var Schema = mongoose.Schema

// ===examSchema====
var evenSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    date: { type: Date, default: Date.now() }
})

// Query model
module.exports = mongoose.model('QueryForm', evenSchema)