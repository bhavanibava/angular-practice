var mongoose = require('mongoose');
mongoose.exports = mongoose.model('task',{
    title : {type : String, default:''},
    Description : {
        type : String, index : true },
    ownerName : {
        type : String, index : true },
    emailId : {
        type : String, index : true },
    applicationId : {
        type : Number, index : true },
    status : { type : String },
    createdOn : {
        type : Date, default : Date.now },
    modifiedOn : {
        type : Date, default : Date.now }
}) 