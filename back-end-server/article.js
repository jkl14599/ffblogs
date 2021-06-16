const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title:String,
    content:String,
    label:String,
    author:String,
    releaseTime:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Article',ArticleSchema);
