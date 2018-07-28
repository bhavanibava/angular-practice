var Task = require('./models/todo');
// var logger = require('../logger/index');

var getalltastdetails = function(req,res){
    // logger.info('GET-task');
    return Task.find(function(error,tasks){
        if(!error){
            res.send(tasks);
            console.log('get task details successfully',tasks);
        }
        else{
            res.send({
                statusCode : 500,
                error : "internal server error"
            });
        }
    }) 
}

var createtaskdetails = function(req,res){
    var task = new Task({ 
        title : req.body.title,
        Description : req.body.Description,
        ownerName : req.body.ownerName,
        emailId : req.body.emailId,
        applicationID : req.body.applicationID,
        status : req.body.status
    })
    return task.save(function(error){
        if(!error){
        //    logger.info('created');
        console.log('create task details successfully',task);
            res.json({
                statusCode : 200,
                task : Task
            });
        }
        else{
            console.log('error while creating task');
            res.send({
                statusCode : 500,
                error : 'internal error'
            });
        }
    })
}

var updatetaskdetails = function(req,res){
    return Task.findById(req.params.id,function(error,task){
    //    console.log('task details...',task);
        if(error){
            res.send({
                statusCode : 400,
                error : 'not found data'
            })
        }
        if(req.body.title!=null){
            task.title = req.body.title;
        }
        if(req.body.Description!=null){
            task.Description = req.body.Description;
        }
        if(req.body.ownerName!=null){
            task.ownerName = req.body.ownerName;
        }
        if(req.body.emailId!=null){
            task.emailId = req.body.emailId;
        }
        if(req.body.applicationID!=null){
            task.applicationID = req.body.applicationID;
        }
        if(req.body.status!=null){
            task.status = req.body.status;
        }
        return task.save(function(error,task){
            if(!error){
            //    logger.info('updated successfully');
            console.log('updated successfully',task);
                res.json({
                    statusCode : 200,
                    task : Task
                });
            }
            else{
                res.send('error while save this function');
            }
        })
    })
}

var removetaskdetails = function(req,res){
    return Task.findById(req.params.id,function(error,task){
    //    console.log('id....',req.params.id);
        if(error){
            res.send('error while get input id');
        }
        return task.remove(function(error){
            if(!error){
            //    logger.info('deleted details : ',task.body);
            console.log('deleted details : ',task.body);
                res.send({
                    statusCode : 200,
                    message : 'successfully deleted'
                });
            }
            else{
                res.send('error while remove that data');
            }
        })
    })
}

exports.getalltastdetails = getalltastdetails;
exports.createtaskdetails = createtaskdetails;
exports.updatetaskdetails = updatetaskdetails;
exports.removetaskdetails = removetaskdetails;



    // {
    //      "title":"task-add",
    //      "Description":"add task list",
    //     "ownerName":"bhava",
    //     "emailId":"bhava123@gmail.com",
    //     "applicationId":18,
    //     "regStatus":"true"
    // }


//     ng-model="title"
// ng-model="Description"
// ng-model="ownerName"
// ng-model="emailId"
// ng-model="applicationId"
// ng-model="status"