angular.module('taskService', [])
	.factory('task', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/task');
			},
			create : function(todoData) {
				return $http.post('/api/task', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/task/' + id);
			}
		}
	}]);