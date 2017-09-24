(function() {
    'use strict';

    angular
    .module('portfolio', [
       'ngRoute' 
    ])
    .config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "src/portfolio/templates/home.html"
    })
    .when("/about", {
        templateUrl : "src/portfolio/templates/about.html"
    })
    .when("/contact", {
        templateUrl : "src/portfolio/templates/contact.html"
    })
});
})();