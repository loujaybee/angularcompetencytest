"use strict";

var demoApp = angular.module("demoApp", ['ui.router']);

demoApp.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    //Inside of the app config
    $stateProvider.state('home', {
        url: '/',
        template: '<da-form></da-form>'
    }).state('success', {
        url: '/success',
        template: '<da-success></da-success>'
    });
});
"use strict";

demoApp.service("countryService", function ($http) {
    this.get = function () {
        return $http.get('https://restcountries.eu/rest/v1/region/Europe');
    };
});
"use strict";

demoApp.service("userService", function ($http) {

    // Levarage closure private scoping
    var user = {};

    this.set = function (data) {
        return user = data;
    };
    this.get = function () {
        return user;
    };
    this.create = function (data) {
        return $http.post('/api/userdata', data);
    };
});
'use strict';

demoApp.component('daForm', {
    controller: function daFormController(countryService, userService, $state) {

        var $ctrl = this;

        $ctrl.user = {};

        countryService.get().then(function (data) {
            $ctrl.countries = data.data;
        });

        $ctrl.formSubmit = function () {

            // Guard against browsers where native form validation fails
            if (!$ctrl.exampleForm.$valid) {
                $ctrl.formIsIncorrect = true;
                return;
            }

            userService.create($ctrl.user).then(function () {
                return userService.set($ctrl.user);
            }).then(function () {
                return $state.go('success');
            });
        };
    },
    template: '\n     <div class="form_component">\n      <form name="$ctrl.exampleForm" ng-submit="$ctrl.formSubmit()">\n        <h1>Some Useful Government Service</h1>\n\n        <label for="name">Name</label>\n        <input ng-model="$ctrl.user.name" required name="name" type="text">\n        <br>\n\n        <label for="sex">Sex</label>\n        <span>Male</span>\n        <input ng-model="$ctrl.user.sex" required type="radio" name="sex" value="male" checked>\n        <span>Female</span>\n        <input ng-model="$ctrl.user.sex" required type="radio" name="sex" value="female" checked>\n        <br>\n\n        <label for="age">Age</label>\n        <input ng-model="$ctrl.user.age" required name="age" type="number">\n        <br>\n\n        <label for="country">Country</label>\n        <select required ng-model="$ctrl.user.country" name="country" ng-options="country.name as country.name for country in $ctrl.countries">\n        </select>\n        <br>\n        <button type="submit">Apply</button>\n\n        <div ng-if="(!$ctrl.exampleForm.$valid && $ctrl.exampleForm.$submitted) || $ctrl.formIsIncorrect">\n            Please ensure all fields are populated.\n        </div>\n      </form>\n    </div>\n    '
});
'use strict';

demoApp.component('daSuccess', {
    controller: function successComponent($scope, userService) {

        var $ctrl = this;

        $ctrl.name = userService.get().name;
    },
    template: '\n            <h1> Application complete </h1>\n            <p>{{$ctrl.name}} Thank you for applying to this useful government service</p>\n        '
});