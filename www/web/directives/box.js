(function () {
    angular.module('colorGame').directive('box', [
        '$parse',
        function ($parse) {
            return {
                restrict: 'AE',
                scope: {
                    obj : '=?',
                    onChange : '=?'
                },
                templateUrl : 'web/directives/box-tpl.html',
                link: function(scope, element, attributes, ngModel) {
                    scope.onBoxClick = function (obj) {
                      obj.value = !obj.value;
                      if(scope.onChange){
                        scope.onChange();
                      }
                    };
                }
            };
        }
    ]);
})();
