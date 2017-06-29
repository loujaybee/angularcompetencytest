demoApp.directive('daSuccess', function(userService, $state) {
    return {
        restrict: 'E',
        link: function($scope) {

            $scope.name = userService.get().name;

        },
        scope: {},
        template: `
            <h1> Application complete </h1>
            <p>{{name}} Thank you for applying to this useful government service</p>
        `
    };
});
