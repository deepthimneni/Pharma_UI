'use strict';

angular
    .module('app.services')
    .constant('BASE_URL', 'http://localhost:5000')
    .factory('APIService', dataService);

function dataService($http, BASE_URL, $log) {
    var data = {
        'getProducts': getProducts,
    };
    function makeRequest(url, params) {
        var requestUrl = BASE_URL + '/' + url;
        angular.forEach(params, function(value, key){
            requestUrl = requestUrl + key + '=' + value + '&';
        });
        return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).then(function(response){
            return response.data;
        }).catch(dataServiceError);
    }
    function getProducts(product_name, company_id) {
        return makeRequest('api/products?', {product_name: product_name, company_id: company_id});
    }
   
    return data;

    function dataServiceError(errorResponse) {
        $log.error('XHR Failed for ShowService');
        $log.error(errorResponse);
        return errorResponse;
    }
}