demoApp.directive('daSuccess', function(countryService, $state) {
    return {
        restrict: 'E',
        link: function($scope) {

        },
        scope: {},
        template: `
            <h1> Application complete </h1>
            <p>Thank you for applying to this useful government service</p>
        `
    };
});
