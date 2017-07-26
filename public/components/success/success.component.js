'use strict';

demoApp.component('daSuccess', {
    controller: function successComponent($scope, userService) {

        var $ctrl = this;

        $ctrl.name = userService.get().name;
    },
    template: '\n            <h1> Application complete </h1>\n            <p>{{$ctrl.name}} Thank you for applying to this useful government service</p>\n        '
});