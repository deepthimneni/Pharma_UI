'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config)
    .run(run);

function config ($routeProvider) {
    $routeProvider
        //.when('/', {
        //     template: "<home />"
        // })
        // .otherwise({
        //     redirectTo: '/'
        // });
        .when('/', {
            template: "<home />"
        })
        .when('/login', {
            template: "<login />"
        })

        .when('/register', {
            template: "<register />"
        })
        .otherwise({ redirectTo: '/login' });
}

run.$inject = ['$rootScope', '$location', '$http'];
function run($rootScope, $location, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = localStorage.getItem('pharma-api') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['x-access-token'] = $rootScope.globals.currentUser.jwt_token;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}