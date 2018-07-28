var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Task = new Schema({
    title : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        index : true
    },
    ownerName : {
        type : String,
        index : true
    },
    emailId : {
        type : String,
        index : true
    },
    applicationID : {
        type : Number,
        index : true,
        required : true
    },
    status : {
        type : String
    },
    createdOn : {
        type : Date,
        default : Date.now
    },
    modifiedOn : {
        type : Date,
        default : Date.now
    }
});
module.exports =mongoose.model('Task',Task);