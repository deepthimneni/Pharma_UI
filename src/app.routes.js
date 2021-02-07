'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            template: "<home />"
        })
        .otherwise({
            redirectTo: '/'
        });
}