const mongoose = require("mongoose");

// connection URI

const mongoURI = "mongodb+srv://admin:admin@cluster0.a7dmj.mongodb.net/blood-bank-reactnative-saylani?retryWrites=true&w=majority";

// remove deprecation warning of collection.ensureIndex
mongoose.set('useCreateIndex', true);

// connect to mongodb
mongoose.connect(mongoURI, { useNewUrlParser: true })

module.exports = mongoose;