angular
    .module('app.services')
    .factory('AuthService', AuthService);

// AuthService.$inject = ['$http', '$rootScope'];
function AuthService($http, $rootScope) {

    var service = {};
    var base_url = "http://localhost:5000";

    service.Login = Login;
    service.Register = Register;
    service.SetCredentials = SetCredentials;
    return service;


    function SetCredentials(response) {
        if (response != null && response != undefined) {
            localStorage.setItem('pharma-api', { currentUser: response});

            $rootScope.globals = {
                currentUser: response
            };

            // set default auth header for http requests
            $http.defaults.headers.common['x-access-token'] = response.jwt_token;
        }
    }

    function Login(loginData) {
        return $http.post(base_url + '/api/login', loginData).then(handleSuccess, handleError('Error creating user'));
    }

    function Register(RegisterData) {
        return $http.post(base_url + '/api/users', RegisterData).then(handleSuccess, handleError('Error creating user'));
    }



    // private functions

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
}