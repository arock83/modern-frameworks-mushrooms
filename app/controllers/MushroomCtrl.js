"use strict";

app.controller("MushroomCtrl", function($scope, MushroomFactory) {
	MushroomFactory.getShrooms()
	.then(function(object) {
		$scope.shrooms = object;
		console.log("so far so good ", $scope.shrooms);
	});
});