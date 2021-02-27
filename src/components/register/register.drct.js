angular
    .module('app.core')
    .directive('register', register);
function register(APIService) {
    var directive = {
        controller: controller,
        templateUrl: 'components/register/register.tpl.html',
        restrict: 'E',
        scope: {
        }
    };
    return directive;
    function controller($scope) {

        $scope.registerBtnClick = function() {

        };
    }
}