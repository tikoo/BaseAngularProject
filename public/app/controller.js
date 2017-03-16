app.controller('controller', function($scope, service) {

/** ========================================================================================
 ** Variables
 ** ===================================================================================== */

 	$scope.version = "0.0.1";

 	$scope.number = 0;

 	$scope.numberTwo = 1;

/** ========================================================================================
 ** Functions
 ** ===================================================================================== */

 	$scope.increment = function() {

 		$scope.number ++;
 	};

 	$scope.double = function() {

 		service.doubleNumber($scope.numberTwo)
 			.then(function(response) {
 				$scope.numberTwo = response;
 			}, function(error) {
 				console.log('error');
 			})
 	};


/** ========================================================================================
 ** Init
 ** ===================================================================================== */

	
    var init = function() {

        console.log('controller initialized!');
    };

    init();


});