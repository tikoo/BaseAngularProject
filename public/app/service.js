app.service('service', ['$q','$http', '$rootScope', function($q, $http, $rootScope) {
	
/** ========================================================================================
 ** Variables
 ** ===================================================================================== */

    var number;

/** ========================================================================================
 ** Functions
 ** ===================================================================================== */

    // returns an incremented number
    function getNumber(number) {

    	return number + 1;
    }


    function doubleNumber(number) {



    	var endpoint = '/api/doubleNumber/' + number;

    	return $http.get(endpoint)
    		.then(function(response) {

    			return response.data.number;

    		}, function(error) {

                return number*2;

    			return $q.reject(error);
    		});

    }


/** ========================================================================================
 ** Return
 ** ===================================================================================== */

    // Calls to functions inside this service from external controllers
    return {

        getNumber: getNumber,
        doubleNumber: doubleNumber

    };

}]);