angular
    .module('app.core')
    .directive('login', login);

    function login(AuthService, $location) {
    var directive = {
        controller: controller,
        templateUrl: 'components/login/login.tpl.html',
        restrict: 'E',
        scope: {
        }
    };
    return directive;
    function controller($scope) {

        $scope.loginBtnClick = function () {

            AuthService.Login({
                user_name: $scope.username,
                password: $scope.password
            }).then(function (response) {
                if (response.success) {
                    AuthService.SetCredentials(response);
                    $location.path('/');
                }
            })
        };
    }
}