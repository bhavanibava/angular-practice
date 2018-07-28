angular.module('taskController', [])
	.controller('mainController', ['$scope','$http','task', function($scope, $http, task) {
		$scope.formData = {},
		$scope.loading = true
		task.get()
			.success(function(data) {
				$scope.task = data;
				$scope.loading = false;
			});
		$scope.createtask = function() {
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				task.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; 
						$scope.task = data; 
					});
			}
		};
		$scope.deletetask = function(id) {
			$scope.loading = true;

			task.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.task = data;
				});
		};
	}]);