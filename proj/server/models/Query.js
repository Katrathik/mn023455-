const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
    query:String
})

const QueryModel = mongoose.model("queries",QuerySchema)
module.exports = QueryModel