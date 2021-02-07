angular
    .module('app.core')
    .directive('home', home);
function home(APIService) {
    var directive = {
        controller: controller,
        templateUrl: 'components/home/home.tpl.html',
        restrict: 'E',
        scope: {
        }
    };
    return directive;
    function controller($scope) {

        $scope.Products = [];

        $scope.pageInit = function(){
            APIService.getProducts('', '').then(function(response){
                $scope.Products = response;
            });
        };

        $scope.pageInit();
    }
}