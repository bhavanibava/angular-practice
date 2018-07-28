var express = require("express");
var router = express.Router();
var task = require("./task-operation");
router.get('/',function(req,res){
    res.send('welcome');
})
router.get('/api/jobs',function(req,res,next){
  task.getalltastdetails(req,res);  
})
router.post('/api/jobs',function(req,res,next){
    task.createtaskdetails(req,res);
})
router.put('/api/jobs/:id',function(req,res){
    task.updatetaskdetails(req,res);
})
router.delete('/api/jobs/:id',function(req,res){
    task.removetaskdetails(req,res);
})
router.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});
module.exports = router;