var task = require('./models/todo');
function getTodos(res){
	task.find(function(err, todos) {
			if (err)
				res.send(err)

			res.json(todos); 
		});
};

module.exports = function(app) {

	app.get('/api/task', function(req, res) {
		getTodos(res);
	});

	app.post('/api/task', function(req, res) {
		task.create({
			title : req.body.title,
			Description : req.body.Description,
			ownerName : req.body.ownerName,
			emailId : req.body.emailId,
			applicationId : req.body.applicationId,
			status : req.body.status,
			done : false
		}, function(err) {
			if (err)
				res.send(err);

			getTodos(res);
		});

	});
	app.delete('/api/task/:id', function(req, res) {
		task.remove({
			_id : req.params.id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};