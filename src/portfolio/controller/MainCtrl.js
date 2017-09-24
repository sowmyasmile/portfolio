(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];
    function MainController($scope) {
        //$scope.welcome ="Welcome my portfolio";
    }
})();