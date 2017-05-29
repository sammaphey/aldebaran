app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider


        .when('/', {
            templateUrl: 'app/home/home.html'
        })


        .when('/services', {
            templateUrl: 'app/services/services.html'
        })


        .when('/faq', {
            templateUrl: 'app/faq/faq.html'
        })

        .when('/contact', {
            templateUrl: 'app/contact/contact.html'
        })


        .when('/req_term', {
            templateUrl: 'app/req_term/req_term.html'
        })

        .otherwise({
            templateUrl: 'app/home/home.html'
        });
}]);
